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
    path: '/ApiReference',
    component: ComponentCreator('/ApiReference', 'ca7'),
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
    component: ComponentCreator('/docs', '090'),
    routes: [
      {
        path: '/docs/api/connecting',
        component: ComponentCreator('/docs/api/connecting', '3d8'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/consents/',
        component: ComponentCreator('/docs/api/endpoints/consents/', '321'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/consents/consent-object',
        component: ComponentCreator('/docs/api/endpoints/consents/consent-object', 'b82'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/forms',
        component: ComponentCreator('/docs/api/endpoints/forms', 'b25'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/keys',
        component: ComponentCreator('/docs/api/endpoints/keys', '486'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/models',
        component: ComponentCreator('/docs/api/endpoints/models', 'd9b'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/peers',
        component: ComponentCreator('/docs/api/endpoints/peers', '324'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/receipts',
        component: ComponentCreator('/docs/api/endpoints/receipts', '9e1'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/records',
        component: ComponentCreator('/docs/api/endpoints/records', '580'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/statistics',
        component: ComponentCreator('/docs/api/endpoints/statistics', 'e03'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/subjects',
        component: ComponentCreator('/docs/api/endpoints/subjects', '3f1'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/system',
        component: ComponentCreator('/docs/api/endpoints/system', '92c'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/tokens',
        component: ComponentCreator('/docs/api/endpoints/tokens', '011'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/api/endpoints/users',
        component: ComponentCreator('/docs/api/endpoints/users', 'ebd'),
        exact: true,
        sidebar: "apiSidebar"
      },
      {
        path: '/docs/concepts/consent-context-doc',
        component: ComponentCreator('/docs/concepts/consent-context-doc', 'e1f'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/concepts/consent-elements-doc',
        component: ComponentCreator('/docs/concepts/consent-elements-doc', '4a3'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/getting-started/authentication-guide',
        component: ComponentCreator('/docs/getting-started/authentication-guide', 'b70'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/getting-started/config-ref',
        component: ComponentCreator('/docs/getting-started/config-ref', '83c'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/getting-started/full-install-guide',
        component: ComponentCreator('/docs/getting-started/full-install-guide', '012'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/getting-started/start-server-guide',
        component: ComponentCreator('/docs/getting-started/start-server-guide', '93f'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/collect-into-form-guide',
        component: ComponentCreator('/docs/guides/collect-into-form-guide', '369'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/discover-api-guide',
        component: ComponentCreator('/docs/guides/discover-api-guide', '0b5'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/first-consent-form-guide',
        component: ComponentCreator('/docs/guides/first-consent-form-guide', 'fee'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/guides/manage-tos-mobile-app-guide',
        component: ComponentCreator('/docs/guides/manage-tos-mobile-app-guide', 'd2b'),
        exact: true
      },
      {
        path: '/docs/guides/overview-guide',
        component: ComponentCreator('/docs/guides/overview-guide', '79c'),
        exact: true,
        sidebar: "docSidebar"
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
        component: ComponentCreator('/docs/techdoc/sdk', '506'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/docs/techdoc/swagger',
        component: ComponentCreator('/docs/techdoc/swagger', '282'),
        exact: true,
        sidebar: "docSidebar"
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
