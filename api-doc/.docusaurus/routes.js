import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e92'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '56a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '79b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8e6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'e16'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '75a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '968'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'eea'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '329'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'cc1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'dc3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '267'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '624'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '890'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '49d'),
    routes: [
      {
        path: '/docs/concepts/consent-context-doc',
        component: ComponentCreator('/docs/concepts/consent-context-doc', '5b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/concepts/consent-elements-doc',
        component: ComponentCreator('/docs/concepts/consent-elements-doc', '3b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/authentication-guide',
        component: ComponentCreator('/docs/getting-started/authentication-guide', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/config-ref',
        component: ComponentCreator('/docs/getting-started/config-ref', '5b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/full-install-guide',
        component: ComponentCreator('/docs/getting-started/full-install-guide', '644'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/start-server-guide',
        component: ComponentCreator('/docs/getting-started/start-server-guide', '207'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/collect-into-form-guide',
        component: ComponentCreator('/docs/guides/collect-into-form-guide', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/discover-api-guide',
        component: ComponentCreator('/docs/guides/discover-api-guide', 'ff1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/first-consent-form-guide',
        component: ComponentCreator('/docs/guides/first-consent-form-guide', 'f26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/manage-tos-mobile-app-guide',
        component: ComponentCreator('/docs/guides/manage-tos-mobile-app-guide', 'd2b'),
        exact: true
      },
      {
        path: '/docs/guides/overview-guide',
        component: ComponentCreator('/docs/guides/overview-guide', '24b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/techdoc/api-doc',
        component: ComponentCreator('/docs/techdoc/api-doc', '3b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/techdoc/consent-context-doc',
        component: ComponentCreator('/docs/techdoc/consent-context-doc', '418'),
        exact: true
      },
      {
        path: '/docs/techdoc/consent-elements-doc',
        component: ComponentCreator('/docs/techdoc/consent-elements-doc', '343'),
        exact: true
      },
      {
        path: '/docs/techdoc/sdk',
        component: ComponentCreator('/docs/techdoc/sdk', '1e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/techdoc/swagger',
        component: ComponentCreator('/docs/techdoc/swagger', '6f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '96e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
