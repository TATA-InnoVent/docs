# Boilerplate Prompts
---



The **BOILERPLATE PROMPT** is a predefined template used to generate foundational or repetitive structures across multiple components or files. This prompt provides the LLM with instructions to generate standardized setups such as file structures, basic imports, and common configurations, ensuring consistency and reducing the effort of manually setting up similar structures.

## Important Requirement

When specifying the boilerplate prompt, **always include** the following export statement:

```javascript
export const BOILERPLATE_PROMPT
```

## Template Structure

A boilerplate prompt typically includes basic configuration for setting up a component or file, ensuring that essential elements like imports, exports, and file structures are properly initialized.

```javascript
export const BOILERPLATE_PROMPT = `
  Create a standard setup for a component including necessary imports and a default export.

  Ensure the component follows project conventions and includes no unnecessary code or dependencies.
  
  Use placeholder text or values where specific data is not yet available.
`
```

## Usage

Boilerplate prompts are commonly used when you need a consistent and reusable structure for new files or components. This helps speed up development by ensuring that common patterns are followed across the project.

---
