import requests
import json

def openai(openaiPrompt="",  content="", model="gpt-4o-mini"):

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {OPENAI_API_KEY}"
    }

    data = {
        "model": model,
        "messages": [
            {
                "role": "system",
                "content": openaiPrompt
            },
            {
                "role": "user",
                "content": content
            }
        ]
    }

    response = requests.post(OPENAI_API_URL, headers=headers, data=json.dumps(data))

    response_data = response.json()

    if response.status_code == 200:
        openai_result = response_data['choices'][0]['message']['content']
        print(f'{content} -> {openai_result}')
        return openai_result
    else:
        print(f"Request failed, status code: {response.status_code}")
        print(headers)
        print(data)
        print(response.text)
        return "Failed"

OPENAI_API_KEY = "Your API Key"
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"
prompt = "You prompt here"

content1 = "You are a bitch."
content2 = "Check out this amazing site: http://example.com"
content3 = "Contact me at myemail@example.com for more details."
content4 = "This content contains illegal information."
content5 = "My QQ is 1234567890."
content6 = "This artcle is help me solve problem."

openai(openaiPrompt=prompt, content=content1)
openai(openaiPrompt=prompt, content=content2)
openai(openaiPrompt=prompt, content=content3)
openai(openaiPrompt=prompt, content=content4)
openai(openaiPrompt=prompt, content=content5)
openai(openaiPrompt=prompt, content=content6)
