# Writing Prompts

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