Here’s a draft for the `api-key-setup.md` that includes instructions for setting up the API keys:

---

# API Key Setup

To integrate and use the powerful AI capabilities of various models within our framework, you'll need to set up the following API keys:

1. **NEXSIS_OPENAI_API_KEY**: For integrating OpenAI models.
2. **NEXSIS_GEMINI_API_KEY**: For integrating Google's Gemini models.
3. **NEXSIS_GROQ_API_KEY**: For integrating Groq AI models.

### Steps to Set Up API Keys:

### 1. **NEXSIS_OPENAI_API_KEY**

This key is used to access OpenAI's language models for text generation, code completion, and more.

#### Setup:
- Go to the [OpenAI API key page](https://beta.openai.com/account/api-keys).
- Log in or sign up for an account.
- Create a new API key.
- Copy the API key, and add it to your environment variables:
  
  ```bash
  export NEXSIS_OPENAI_API_KEY="your-openai-api-key"
  ```

#### Usage:
- This API key will be used when invoking OpenAI models within the framework. Ensure it is securely stored and available in your environment.

---

### 2. **NEXSIS_GEMINI_API_KEY**

This key is used to access Google's Gemini AI models for high-performance machine learning tasks.

#### Setup:
- Go to the [Google Cloud Console](https://console.cloud.google.com/), and ensure the **Gemini API** is enabled for your project.
- Generate an API key from the **Credentials** section.
- Add the key to your environment variables:

  ```bash
  export NEXSIS_GEMINI_API_KEY="your-gemini-api-key"
  ```

#### Usage:
- The Gemini API key is used to invoke Google's large models for advanced tasks like text processing and model training.

---

### 3. **NEXSIS_GROQ_API_KEY**

This key is used to access Groq AI's models, optimized for edge computing and high-speed inference.

#### Setup:
- Register for an account on the [Groq AI platform](https://www.groq.com/).
- Navigate to the API section in your Groq dashboard and create a new API key.
- Set up the environment variable in your terminal:

  ```bash
  export NEXSIS_GROQ_API_KEY="your-groq-api-key"
  ```

#### Usage:
- This key allows you to run AI models optimized for hardware acceleration and edge computing through Groq's platform.

---

### Storing API Keys

To prevent your API keys from being hardcoded in your source code, store them in environment variables or use a secrets manager.

For development, you can add these keys to a `.env` file:

```plaintext
NEXSIS_OPENAI_API_KEY="your-openai-api-key"
NEXSIS_GEMINI_API_KEY="your-gemini-api-key"
NEXSIS_GROQ_API_KEY="your-groq-api-key"
```

Load these keys using a package like `dotenv` (for Node.js) or natively in your environment.

---
