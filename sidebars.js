/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'Overview', // Overview.md
    'Getting Started', // Getting Started.md
    // {
    //   type: 'category',
    //   label: 'Setup',
    //   items: [
    //     'LLM Integration/setup/installation', // This might need adjustment based on actual structure
    //     'LLM Integration/setup/configuration',
    //   ],
    // },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'Configuration/baseUrl', // Case sensitive and exact path
        'Configuration/boilerPlate',
        'Configuration/depthLimit',
        'Configuration/entryPoints',
        'Configuration/includeComponentCode',
        'Configuration/llmDirectives',
        'Configuration/runOnce',
      ],
    },
    {
      type: 'category',
      label: 'Component Prompts',
      items: [
        {
          type: 'category',
          label: 'Writing Prompts',
          items: [
            'Component Prompts/Writing Prompts/system-prompt', // Case sensitive and exact path
            'Component Prompts/Writing Prompts/component-prompt',
            'Component Prompts/Writing Prompts/boilerplate-prompt',
          ],
        },
        'Component Prompts/prompt-chaining',
      ],
    },
    {
      type: 'category',
      label: 'LLM Integration',
      items: [
        'LLM Integration/Overview', // LLM Integration/overview.md
        {
          type: 'category',
          label: 'Setup',
          items: [
            'LLM Integration/setup/api-key-setup', // Correct path found from logs
            'LLM Integration/setup/model-configuration',
            // 'LLM Integration/setup/common-tasks',
          ],
        },
        {
          type: 'category',
          label: 'LLM Directives',
          items: [
            'LLM Integration/LLM Directives/usage',
            'LLM Integration/LLM Directives/syntax',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Best Practices',
    //   items: [
    //     'Configuration/baseUrl', // These may be from the Configuration folder
    //     'Configuration/depthLimit',
    //     'Configuration/includeComponentCode',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'FAQ',
    //   items: [
    //     'LLM Integration/faq/general', // Available paths based on error log
    //     'LLM Integration/faq/troubleshooting',
    //   ],
    // },
  ],
};

module.exports = sidebars;
