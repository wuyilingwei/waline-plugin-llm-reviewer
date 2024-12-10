module.exports = function ({ LLMApiUrl, LLMName, LLMApiKey, LLMPrompt, LLMReason }) {
    if (!LLMApiKey) {
      console.error('LLMApiKey is required');
      return {};
    }

    // default api and model
    if (!LLMApiUrl) {
      LLMApiUrl = 'https://api.openai.com/v1/chat/completions';
    }
    if (!LLMName) {
      LLMName = 'gpt-4o-mini';
    }
    // default prompt
    if (!LLMPrompt) {
      LLMPrompt = 'You are a review bot. Your task is to review the comments according to following rules: \
      1. Any contact information should not be included, including qq number, email, phone number, etc. \
      2. Any content with advertising or sensitive information should not be included. \
      3. Any other content that is not suitable for public display should not be included. \
      ';
    }
    // output require
    if (LLMReason) {
      LLMPrompt += ' Output should be (approved/spam)|reason.';
    } else {
      LLMPrompt += ' Output should be a single word(approved/spam).';
    }

    const doReview = async (comment) => {
      const response = await fetch(LLMApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LLMApiKey}`,
        },
        body: JSON.stringify({
          model: LLMName,
          messages: [
            {
              role: 'system',
              content: LLMPrompt
            },
            {
              role: 'user',
              content: comment,
            },
          ],
        }),
      });
      const data = await response.json();
      if (data && data.choices && data.choices.length > 0) {
        console.log('LLMPrompt', LLMPrompt);
        console.log('comment', comment);
        console.log('llm response', data.choices[0].message);
        return data.choices[0].message.content;
      } else {
        return 'waiting';
      }
    }

    return {
      hooks: {
        async preSave(data) {
          const { userInfo } = this.ctx.state;
          const isAdmin = userInfo.type === 'administrator';
          // ignore admin comment
          if (isAdmin) {
            return;
          }

          try {
            const resp = await doReview(data.comment);
            if (LLMReason) {
              judge = resp.split('|')[0];
              reason = resp.split('|')[1];
            } else {
              judge = resp;
            }

            if (judge === 'approved' || judge === 'spam' || judge === 'waiting') {
              data.status = resp;
            } else {
              data.status = 'waiting';
            }
          } catch (e) {
            console.log(e);
            data.status = 'waiting';
          }
        },
      },
    };
  }

