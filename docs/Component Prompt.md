---
sidebar_position: 4
---


# Component Prompt

The COMPONENT PROMPT in the given code is a template or directive used to guide a LLM or code generation tool on how to create a specific component. This prompt provides the LLM with detailed instructions about the structure and requirements of the component it should generate.

## Important Requirement

When specifying the component prompt, **always include** the following export statement:

```javascript
export const COMPONENT_PROMPT
```

## Template Structure

```javascript
export const COMPONENT_PROMPT = `
  This is the main entrypoint file
  This file does not contain any styling and structure except calling the component

  Use Inline CSS only and dont add more and excessive css with the external css
```

<hr/>

# Understanding Prompt Chaining with Example Code

**Prompt chaining** is a technique used to break down complex tasks into smaller, more manageable steps by using multiple LLMs (Language Learning Models). This approach ensures that different components or functionalities are generated separately and efficiently. Let's explore how prompt chaining is used in the provided code example.

## Code Example

### 1. Using `ai:[gemini]` for the Main `App` Component

**Prompt 1: App Component**
```javascript
'use ai:[gemini]'

export const COMPONENT_PROMPT = `
  This is the main entrypoint file
  This file does not contain any styling and structure except calling the component

  Use Inline CSS only and dont add more and excessive css with the external css

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
      }
    ]
  }
`
```
**Generated Code:**
```js
import React from 'react';
import About from './pages/About';

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <About />
    </div>
  );
};

export default App;
```

#### In this example, the App component imports the About component and renders it. The inline CSS ensures the component spans the full viewport width (100vw).


**Prompt 2: About Component**

The second prompt builds upon the structure provided by the App component. It defines an About component with a navbar, hero sections, and a footer. The hero section is split vertically, with each half taking up 50% of the width, one side featuring an image and the other side containing text.

```js
{
  "componentName": "About",
  "type": "functional",
  "description": "An About component with a navbar, hero sections, and footer. The hero section has two parts separated vertically with images and text.",
  "style": "Inline CSS only"
}
```

**Generated Code:**
```js
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

#### Here, the About component adds detailed content, including a navigation bar, hero sections with images and text, and a footer. Inline CSS is used for styling, ensuring that no additional CSS files are required.
