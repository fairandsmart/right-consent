// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Right Consents',
  tagline: 'The universal Open source solution for Consent and Preference Management',
  url: 'https://right-consents.fairandsmart.io/',
  baseUrl: '/developers/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fairandsmart', // Usually your GitHub org/user name.
  projectName: 'right-consents', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    apiSpec: 'openapi.json',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'FairAndSmart',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://right-consents.fairandsmart.io/',
            label: 'Right Consents',
            className: 'title'
          },
          {
            type: 'doc',
            docId: 'getting-started/quick-start-guide',
            position: 'left',
            label: 'Docs',
          },
          {
            href: '/apiReference',
            position: 'left',
            label: 'API Reference',
          },
          {
            href: 'https://github.com/fairandsmart/right-consents',
            className: 'header-github-link',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Overview',
                href: 'https://right-consents.fairandsmart.io/about/overview/',
              },
              {
                label: 'Features',
                href: 'https://right-consents.fairandsmart.io/about/features/',
              },
              {
                label: 'Use cases',
                href: 'https://right-consents.fairandsmart.io/about/integrate-html-form/',
              },
              {
                label: 'Enterprise',
                href: 'https://right-consents.fairandsmart.io/about/enterprise/',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/getting-started/quick-start-guide',
              },
              {
                label: 'Build a consent form',
                to: '/docs/guides/first-consent-form-guide',
              },
              {
                label: 'Developer Kit',
                to: '/docs/techdoc/sdk',
              },
              {
                label: 'API Reference',
                to: '/apiReference',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fairandsmart/right-consents',
              },
              {
                label: 'Fair & Smart',
                href: 'https://fairandsmart.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fair&Smart. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['properties', 'uri'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
