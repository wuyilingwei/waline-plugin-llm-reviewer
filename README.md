# waline-plugin-llm-reviewer

a Waline plugin that use openai-compatible LLM API to review comments.

***
> [中文 README](https://github.com/zhullyb/waline-plugin-llm-reviewer/blob/main/README_CN.md)

## How to Install

```bash
npm install waline-plugin-llm-reviewer
```

## How to Use

```javascript
// index.js
const Waline = require('@waline/vercel');
const GPTReviewer = require('waline-plugin-llm-reviewer');

module.exports = Waline({
  plugins: [
    GptReviewer({
        openaiBaseUrl: process.env.OPENAI_BASE_URL,
        openaiModel: process.env.OPENAI_MODEL,
        openaiApiKey: process.env.OPENAI_API_KEY,
        openaiPrompt: process.env.OPENAI_PROMPT,
    })
  ]
});
```

## Environment Variables

- `ASISMET_KEY`: Anti-spam comment service used by Waline, **it is recommended to set it to `false` to disable**.
- `OPENAI_BASE_URL`: API base URL. e.g. `https://api.openai.com`
- `OPENAI_MODEL`: Model name. e.g. `gpt-4o-mini`
- `OPENAI_API_KEY`: API key. e.g. `ak-xxxxxx`
- `OPENAI_PROMPT`(Optional): Prompt for the model. e.g. `This is a comment review: `

## License

[MIT](./LICENSE)
