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
  docSidebar: [
    'getting-started/quick-start-guide',
    'getting-started/overview',
    {
      type: 'category',
      label: 'Concepts & Terminology',
      link: {
        type: 'generated-index',
        title: 'Concepts & Terminology',
        description: 'Learn about the most important Right Consents concepts!',
        slug: '/concepts/guide',
        keywords: ['guides'],
        image: '/img/logo.svg',
      },
      items: [
        'concepts/models',
        'concepts/transactions',
        'concepts/subjects',
        'concepts/records',
        'concepts/receipts',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/first-consent-form-guide',
        'guides/discover-api-guide',
        'guides/collect-into-form-guide',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        'techdoc/full-install-guide',
        'techdoc/config-ref',
        'api/connecting',
        'techdoc/sdk'
      ],
    }
  ]
};

module.exports = sidebars;
