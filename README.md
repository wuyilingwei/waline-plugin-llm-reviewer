# waline-plugin-llm-reviewer

a Waline plugin that use openai-compatible LLM API to review comments.

***
> [中文 README](/README_CN.md)

## How to Install

``` bash
npm install waline-plugin-llm-reviewer
```

## How to Use

Edit your Waline File:

### index.js

``` javascript
const Waline = require('@waline/vercel');
const GPTReviewer = require('waline-plugin-llm-reviewer');

module.exports = Waline({
  plugins: [
    GPTReviewer({
        openaiBaseUrl: process.env.OPENAI_BASE_URL,
        openaiModel: process.env.OPENAI_MODEL,
        openaiApiKey: process.env.OPENAI_API_KEY,
        openaiPrompt: process.env.OPENAI_PROMPT,
        openaiReason: process.env.OPENAI_REASON
    })
  ]
});
```

### package.json

Add `"waline-plugin-llm-reviewer": "latest"` into package.json dependencies.

## Environment Variables

| Name | Need | Default | Introduce  |
| :---: | :---: | :---: | :---: |
| `ASISMET_KEY`      | [ ] | - | Anti-spam comment service used by Waline. Recommended to `false`.|
| `OPENAI_BASE_URL`  | [x] | - | API base URL`https://api.openai.com`. |
| `OPENAI_MODEL`     | [x] | - | Model name. Recommended to `gpt-4o-mini` |
| `OPENAI_API_KEY`   | [x] | - | API key `ak-xxxxxx`.|
| `OPENAI_PROMPT`    | [ ] | `false` | Prompt for the model.`This is a comment review: ` |
| `OPENAI_REASON`    | [ ] | `false` | Enable AI judge reason, suggest when debug or too many misjudgments.|


Click "Redeploy" after change environment variables.

## License

[MIT](./LICENSE)
