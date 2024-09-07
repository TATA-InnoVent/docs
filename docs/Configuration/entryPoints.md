# `entryPoints` Configuration

## Overview

The `entryPoints` configuration setting defines the initial files or modules that the application or tool should start processing. These entry points serve as the starting location for the module resolution and build process, ensuring that all dependencies and related files are correctly included.

## Usage

### Syntax

```json
{
    "entryPoints": ["App.jsx", "index.js"]
}
```
### Parameters

* **Type**: array of strings
* **Default Value**: [] (Empty array)
* **Description**: The `entryPoints` array should contain the filenames or paths to the modules that act as the entry points for your application. These paths are relative to the `baseUrl` or the root directory specified in the configuration file.

### Example

```json
{
    "entryPoints": ["App.jsx"]
}
```
In this example, App.jsx is defined as the primary entry point for the application. This means the module resolution and build process will begin from this file and include all its dependencies.

### Benefits of Using `entryPoints`

* **Clear Starting Point**: By explicitly defining `entryPoints`, you provide a clear starting location for the module resolution process, making your build process more predictable and easier to manage.
* **Modularization**: In large projects, multiple entry points can be defined to handle different parts of the application, allowing for better organization and separation of concerns.
* **Optimized Builds**: Defining specific entry points allows build tools (e.g., Webpack, Parcel) to optimize the build process by only including necessary files, improving performance and reducing bundle size.

### Integration with Other Configuration Options

* **baseUrl**: `entryPoints` should be specified relative to the `baseUrl` if it is set, making it easier to define entry points in a consistent manner.
* **depthLimit**: Combine `entryPoints` with `depthLimit` to control the depth of file resolution from each entry point, optimizing the build process further.

### Common Use Cases

* **Single-Page Applications (SPA)**: For SPAs, you might set `entryPoints` to the main file, like `index.js` or `App.jsx`, to kickstart the application.
* **Multi-Page Applications (MPA)**: For MPAs, you can define multiple entry points, one for each page or module, allowing for better control over the build process.
* **Library Development**: When building JavaScript libraries, you can define entry points for different modules to create separate bundles for each part of your library.
