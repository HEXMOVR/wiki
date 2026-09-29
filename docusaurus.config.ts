import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HEXMOVR 技术文档',
  tagline: 'HEXMOVR 技术文档',
  favicon: 'img/favicon.svg',

  // GitHub Pages 自定义域名：站点部署在 wiki.hexmovr.com 根路径。
  url: 'https://wiki.hexmovr.com',
  baseUrl: '/',
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
          breadcrumbs: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '技术文档',
      logo: {alt: 'HEXMOVR', src: 'img/hexmovr-logo.png'},
      items: [
        {to: '/', label: '文档', position: 'left'},
        {href: 'https://github.com/HEXMOVR/wiki', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} HEXMOVR.`,
    },
    colorMode: {disableSwitch: true, respectPrefersColorScheme: false},
  } satisfies Preset.ThemeConfig,
};

export default config;
