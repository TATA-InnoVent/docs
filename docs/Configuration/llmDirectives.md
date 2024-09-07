# `llmDirectives` Configuration

## Overview

The `llmDirectives` configuration setting specifies the integration of various language models or other AI tools used within your project. It allows you to define and configure how different language models (LLMs) are referenced and utilized, enabling you to tailor AI interactions to meet specific needs.

## Usage

### Syntax

```json
{
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
    ]
}
```
### Parameters

* **Type**: array of objects
* **Description**: An array where each object specifies an LLM directive with its name and path. The name is a unique identifier for the language model, and the path points to the module or script that implements the model.

#### Example

```json
{
    "llmDirectives": [
        {
            "name": "openai",
            "path": "./llm/openai.js"
        },
        {
            "name": "gemini",
            "path": "./llm/gemini.js"
        }
    ]
}
```
In this example, two LLM directives are defined: one for OpenAI and one for Gemini. Each directive includes a path to the respective module.

### Key Fields

#### `name`

* **Type**: string
* **Description**: The unique name or identifier for the language model. This name is used to reference the model in other parts of the configuration or code.

##### Example

```json
{
    "name": "openai"
}
```
### `path`

* **Type**: string
* **Description**: The relative path to the module or script that implements the language model. This path should be relative to the location of the configuration file.

#### Example

```json
{
    "path": "./llm/openai.js"
}
```
### Benefits of Using `llmDirectives`

* **Modular Integration**: Allows you to integrate and manage multiple language models or AI tools within your project, enabling a modular approach to AI functionalities.
* **Flexibility**: You can configure and reference different LLMs based on your project requirements, offering flexibility in how AI capabilities are utilized.
* **Centralized Management**: Provides a centralized configuration point for managing and updating language models, streamlining the process of integrating and switching between different models.

### Integration with Other Configuration Options

* **boilerPlate**: Combine `llmDirectives` with `boilerPlate` to provide default prompts or settings for the integrated language models.
* **entryPoints**: Utilize `llmDirectives` in conjunction with `entryPoints` to initialize AI models at specific entry points or during application startup.

### Common Use Cases

* **AI-Powered Features**: Use `llmDirectives` to integrate various language models for different AI-powered features, such as text generation, sentiment analysis, or data extraction.
* **Custom AI Solutions**: Define custom AI solutions by integrating multiple models, each serving a specific purpose or providing unique capabilities.
* **Testing and Development**: Facilitate the testing and development of AI features by configuring and managing different models through a centralized configuration.
