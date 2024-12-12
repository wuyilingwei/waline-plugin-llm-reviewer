# waline-plugin-llm-reviewer-next

a Waline plugin that use openai style LLM API to review comments.

This is a branch version of waline-plugin-llm-reviewer, which provides more functions. Due to the different design concepts from some of the original authors, this version is released separately.

***
> [中文 README](/README_CN.md)

## How to Install

``` bash
npm install waline-plugin-llm-reviewer-next
```

## How to Use

Edit your Waline File:

### index.js

``` javascript
const Waline = require('@waline/vercel');
const LLMReviewer = require('waline-plugin-llm-reviewer-next');

module.exports = Waline({
  plugins: [
    LLMReviewer({
        LLMApiUrl: process.env.LLM_API_URL,
        LLMModel: process.env.LLM_MODEL,
        LLMApiKey: process.env.LLM_API_KEY,
        LLMPrompt: process.env.LLM_PROMPT,
        LLMReason: process.env.LLM_REASON,
    })
  ]
});
```

### package.json

Add `"waline-plugin-llm-reviewer-next": "latest"` into package.json dependencies.

## Environment Variables

| Name | Need | Default | Introduce  |
| :---: | :---: | :---: | :---: |
| `LLM_API_KEY` | T | - | API key `ak-xxxxxx`.|
| `LLM_API_URL` | F | `https://api.openai.com/v1/chat/completions` | API URL. |
| `LLM_MODEL` | F | `gpt-4o-mini` | Model name. Recommended to `gpt-4o-mini` |
| `LLM_PROMPT` | F | `false` | Prompt for the model.`This is a comment review: ` |
| `LLM_REASON` | F | `false` | Enable AI judge reason, suggest when debug or too many misjudgments.|
| `ASISMET_KEY` | F | - | Anti-spam comment service used by Waline. Recommended to `false`.|

Click "Redeploy" after change environment variables.

## Other

Attached is a `prompt_test.py` file that can be downloaded to test the accuracy of your prompt words, including several comment samples. This file does not actually participate in the operation of the plugin.

## License

[MIT](./LICENSE)
