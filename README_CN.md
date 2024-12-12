# waline-plugin-llm-reviewer-next

一个 Waline 插件，使用 openai 兼容的 LLM API 来审查评论。

这是waline-plugin-llm-reviewer的分支版本，提供更多功能，由于和一些初始作者上的设计理念不同，故单独发布此版本

***
> [English README](/README.md)

## 如何安装

``` bash
npm install waline-plugin-llm-reviewer
```

## 如何使用

编辑Waline文件：

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

将 `"waline-plugin-llm-reviewer-next": "latest"` 添加到 package.json 依赖项中。

## 环境变量

| 名称 | 必须 | 默认值 | 介绍 |
| :---: | :---: | :---: | :---: |
| `LLM_API_KEY` | 是 | - | API密钥 `ak-xxxxxx` |
| `LLM_API_URL` | 否 | `https://api.openai.com/v1/chat/completions` | API完整URL |
| `LLM_MODEL` | 否 | `gpt-4o-mini` | 模型名称。推荐使用 `gpt-4o-mini` |
| `LLM_PROMPT` | 否 | `false` | 模型的提示词。`This is a comment review: ` |
| `LLM_REASON` | 否 | `false` | 启用AI判断理由，建议在调试或判断失误较多时使用 |
| `ASISMET_KEY` | 否 | - | Waline使用的反垃圾评论服务。推荐设置为 `false` |

更改环境变量后点击“重新部署”。

## 其他

附上了一个`prompt_test.py`，可以下载来测试你提示词的准确性，包含数个评论样例。该文件不实际参与插件运行。

## 许可证

[MIT](./LICENSE)
