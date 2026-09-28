import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HEXMOVR Documentation',
  tagline: 'HEXMOVR 产品知识库',
  favicon: 'img/favicon.svg',

  // GitHub Pages：纯静态网站，最终只托管 build/ 中生成的 HTML/CSS/JS。
  url: 'https://hexmovr.github.io',
  baseUrl: '/wiki/',
  organizationName: 'HEXMOVR',
  projectName: 'wiki',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {defaultLocale: 'zh-CN', locales: ['zh-CN']},

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'HEXMOVR',
      logo: {alt: 'HEXMOVR', src: 'img/favicon.svg'},
      items: [
        {to: '/', label: '产品文档', position: 'left'},
        {href: 'https://github.com/HEXMOVR', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} HEXMOVR.`,
    },
    colorMode: {respectPrefersColorScheme: true},
  } satisfies Preset.ThemeConfig,
};

export default config;
