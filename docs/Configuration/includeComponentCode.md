# `includeCompleteFileContent` Configuration

## Overview

The `includeCompleteFileContent` setting controls whether the full content of the specified files is included in the output or processing. This option is particularly useful when you need to capture or process the entire content of a file, rather than just metadata or specific sections.

## Usage

### Syntax

```json
{
    "includeCompleteFileContent": true
}
```
### Parameters

* **Type**: boolean
* **Default Value**: false
* **Description**: When `includeCompleteFileContent` is set to true, the full content of the files specified in the configuration will be included in the output or processing steps. If set to false, only specific sections, metadata, or summaries may be processed, depending on the context.

### Example

```json
{
    "includeCompleteFileContent": false
}
```
In this example, the includeCompleteFileContent option is set to false, meaning that only selected portions of the files (such as metadata or specific sections) will be processed, rather than the full file content.

### Benefits of Using `includeCompleteFileContent`

* **Comprehensive Data Capture**: Ensures that the entire content of a file is captured and processed, which can be crucial in scenarios where no data should be omitted.
* **Detailed Analysis**: By including the full file content, you can perform more in-depth analysis or transformations, as all parts of the file are available for processing.
* **Flexible Output**: Depending on the project’s needs, having the option to include or exclude full file content gives you greater flexibility in controlling the output.


### Integration with Other Configuration Options

* **entryPoints**: By setting `includeCompleteFileContent` to true, you ensure that the full content of all files starting from the entry points is processed.
* **depthLimit**: Combine `includeCompleteFileContent` with `depthLimit` to control how deeply the file content is included or processed.

### Common Use Cases

* **Documentation Generation**: When generating documentation, you may want to include the full content of certain files, such as code snippets or configuration files, to provide complete context to users.
* **Code Review Tools**: In tools that perform automated code reviews or analysis, including the entire file content allows for more comprehensive checks and validation.
* **Data Processing Pipelines**: For pipelines that process text or configuration files, enabling `includeCompleteFileContent` ensures that no important details are missed.

