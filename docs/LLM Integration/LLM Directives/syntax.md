# Syntax
---

# Syntax for LLM Directives

The NEXSIS framework supports the integration of various language models (LLMs) like Groq, OpenAI, and Gemini. This document explains how to use AI model directives within your components and structure component prompts to generate functional, structured code.

## 1. **AI Model Directives Syntax**

The `use ai:` directive is used at the top of a component file to specify which LLM model will handle the generation of the component's structure and logic. The available models are `[groq]`, `[openai]`, and `[gemini]`. Each model can provide different capabilities, and the directive defines which one will be used for that particular component.

### Syntax Example:

```javascript
'use ai:[model-name]'
```

Where:
- **`[model-name]`** can be one of the following:
  - `[groq]`: To use the Groq model.
  - `[openai]`: To use the OpenAI model.
  - `[gemini]`: To use the Gemini model.

---

## 2. **Component Prompts**

Component prompts are structured instructions that guide the AI model to generate specific parts of the component. These prompts are tailored to each component and can include detailed descriptions of what the component should look like, how it should behave, and what style conventions should be followed.

The AI model uses these prompts to create the necessary code, ensuring the component adheres to the specifications provided.

### Example: `About.js`

This example demonstrates how the Groq model is used to generate an `About` component with specific layout and style rules.

```javascript
'use ai:[groq]'

export const COMPONENT_PROMPT = `
  Create an About component that includes a navbar and a footer with a hero section.

  Use Inline CSS only and avoid using external or excessive internal CSS.

  The hero section must consist of two vertically separated parts, each taking up 50% width. One side should display a photo, and the other side should contain text related to the photo.
`
```

The Groq model will interpret this prompt and generate the `About.js` component based on the specified layout, styling, and content structure.

### **Generated Code (About.js)**:

```javascript
import React from 'react';

function About() {
  return (
    <>
      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>About Us</h1>
      </nav>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '50vh' }}>
          <div style={{ width: '50%', backgroundImage: 'url(https://picsum.photos/200/300)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div style={{ width: '50%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>Welcome to About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '50vh' }}>
          <div style={{ width: '50%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div style={{ width: '50%', backgroundImage: 'url(https://picsum.photos/200/301)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2023 About Us</p>
      </footer>
    </>
  );
}

export default About;
```

---

## 3. **Examples of Other Model Directives**

### Example: `Contact.js`

This example uses the OpenAI model to generate a simple `Contact` component.

```javascript
// 'use ai:[openai]' 

export const COMPONENT_PROMPT = `
  Contact
`

```

Here, the prompt is minimal, indicating that the OpenAI model should generate a simple contact form component.

### Example: `App.js`

The `App.js` file uses the Gemini model to generate the main application component. The prompt specifies that the file should include the `About` component without adding any additional styling or structure.

```javascript
'use ai:[gemini]'

export const COMPONENT_PROMPT = `
  This is the main entry point file.
  This file does not contain any styling and structure except calling the component.

  Use Inline CSS only and don't add more or excessive CSS with external CSS.

  {
    "componentName": "App",
    "type": "functional",
    "description": "Main application component that includes the About component.",
    "imports": [
      {
        "module": "React",
        "import": "import React from 'react';"
      },
      {
        "module": "./About",
        "import": "import About from './pages/About';"
      },
    ]
  }
`

```

### **Generated Code (App.js)**:

```javascript
import React from 'react';
import About from './pages/About';

const App = () => {
  return (
    <div style={{width:'100vw'}}>
      <About />
    </div>
  );
};

export default App;
```

---

### Conclusion

Using AI model directives like `use ai:[groq]`, `use ai:[openai]`, or `use ai:[gemini]` helps generate structured components through customizable prompts. This allows for seamless integration with various LLMs while ensuring the desired output is achieved with minimal effort.

By adhering to the specified prompts and inline CSS styling conventions, you can maintain control over the component's functionality, appearance, and performance.

--- 
