---
sidebar_position: 1
slug: /
---

# use ai: [llm]

Let's dive deep into the **use ai: [llm] directive**

## Directive Usage

The directive `use ai: [llm]` is employed to activate a custom LLM designed for automating webpage development. By processing user prompts, this LLM generates the necessary HTML, CSS, and JavaScript code to build web components or complete webpages, effectively streamlining the development process and minimizing the need for manual coding.

## Example Usage of `use ai:[gemini]`

To use the Gemini LLM for automating webpage development, you would include the directive `use ai:gemini` in your code or configuration. This directive activates the Gemini LLM to interpret user prompts and generate the necessary HTML, CSS, and JavaScript code.

## Configuration File Example

This configuration file specifies the settings for automating webpage development using various LLM. 

## Configuration Structure Example

```json
{
    "baseUrl": "./app/src",
    "paths": [],
    "entryPoints": ["App.jsx"],
    "depthLimit": 5,
    "runOnce": true,
    "includeCompleteFileContent": false,
    "extensions": [".js", ".jsx"],
    "llmDirectives": [
        {
            "name": "openai",
            "path": "./llm/openai.js"
        },
        {
            "name": "gemini",
            "path": "./llm/gemini.js"
        },
        {
            "name": "groq",
            "path": "./llm/groq.js"
        }
    ],
    "activeLLM": {
        "name": "gemini",
        "path": "./llm/gemini.js"
    },
    "boilerPlate": {
        "prompt": "Hello World",
        "apiUrl": "http://localhost:8000"
    }
}
```

#### "llmDirectives": This section lists all the available LLMs and their paths.
#### "activeLLM": This new section specifies which LLM is currently active and being used. You can adjust the "name" and "path" to the LLM you wish to use.