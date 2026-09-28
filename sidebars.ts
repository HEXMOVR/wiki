import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productsSidebar: [
    'intro',
    'products/product-index',
    {
      type: 'category',
      label: '三相无刷电机功率驱动',
      collapsed: false,
      items: [
        'products/power-drivers/drv8323hr',
        'products/power-drivers/drv8353hr',
      ],
    },
    {
      type: 'category',
      label: '抱闸控制',
      collapsed: false,
      items: ['products/brake/brake-controller'],
    },
    {
      type: 'category',
      label: '再生能量处理',
      collapsed: false,
      items: ['products/regeneration/abclamp01'],
    },
  ],
};

export default sidebars;
