import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '554'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a37'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '24a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c64'),
    exact: true
  },
  {
    path: '/ApiReference',
    component: ComponentCreator('/ApiReference', '917'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '984'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '537'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '964'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '415'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd06'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5d4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '83d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '3d9'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a6e'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b35'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '881'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4c8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6a6'),
    routes: [
      {
        path: '/docs/api/connecting',
        component: ComponentCreator('/docs/api/connecting', '3aa'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/consents/',
        component: ComponentCreator('/docs/api/endpoints/consents/', 'e0e'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/consents/consent-object',
        component: ComponentCreator('/docs/api/endpoints/consents/consent-object', 'dc3'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/forms',
        component: ComponentCreator('/docs/api/endpoints/forms', 'f7a'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/keys',
        component: ComponentCreator('/docs/api/endpoints/keys', '55e'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/models',
        component: ComponentCreator('/docs/api/endpoints/models', '5dc'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/peers',
        component: ComponentCreator('/docs/api/endpoints/peers', '5c2'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/receipts',
        component: ComponentCreator('/docs/api/endpoints/receipts', 'c2b'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/records',
        component: ComponentCreator('/docs/api/endpoints/records', '51b'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/statistics',
        component: ComponentCreator('/docs/api/endpoints/statistics', '01e'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/subjects',
        component: ComponentCreator('/docs/api/endpoints/subjects', '73b'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/system',
        component: ComponentCreator('/docs/api/endpoints/system', '192'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/tokens',
        component: ComponentCreator('/docs/api/endpoints/tokens', '785'),
        exact: true
      },
      {
        path: '/docs/api/endpoints/users',
        component: ComponentCreator('/docs/api/endpoints/users', '387'),
        exact: true
      },
      {
        path: '/docs/concepts/consent-context-doc',
        component: ComponentCreator('/docs/concepts/consent-context-doc', 'a7a'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/concepts/consent-elements-doc',
        component: ComponentCreator('/docs/concepts/consent-elements-doc', '80f'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/getting-started/quick-start-guide',
        component: ComponentCreator('/docs/getting-started/quick-start-guide', '0f9'),
        exact: true
      },
      {
        path: '/docs/guides/collect-into-form-guide',
        component: ComponentCreator('/docs/guides/collect-into-form-guide', '9b0'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/discover-api-guide',
        component: ComponentCreator('/docs/guides/discover-api-guide', '148'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/first-consent-form-guide',
        component: ComponentCreator('/docs/guides/first-consent-form-guide', 'cbe'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/manage-tos-mobile-app-guide',
        component: ComponentCreator('/docs/guides/manage-tos-mobile-app-guide', '028'),
        exact: true
      },
      {
        path: '/docs/guides/overview-guide',
        component: ComponentCreator('/docs/guides/overview-guide', '67c'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/techdoc/authentication-guide',
        component: ComponentCreator('/docs/techdoc/authentication-guide', '679'),
        exact: true
      },
      {
        path: '/docs/techdoc/config-ref',
        component: ComponentCreator('/docs/techdoc/config-ref', 'aad'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/techdoc/consent-elements-doc',
        component: ComponentCreator('/docs/techdoc/consent-elements-doc', 'cf7'),
        exact: true
      },
      {
        path: '/docs/techdoc/full-install-guide',
        component: ComponentCreator('/docs/techdoc/full-install-guide', '940'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/techdoc/sdk',
        component: ComponentCreator('/docs/techdoc/sdk', '6b6'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/techdoc/swagger',
        component: ComponentCreator('/docs/techdoc/swagger', 'fc8'),
        exact: true,
        sidebar: "docSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '789'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
