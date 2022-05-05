const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account',
  },
  {
    name: 'React 微应用',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '首页',
      },
      {
        path: '/seller/list',
        name: '列表',
      },
      {
        path: '/seller/detail',
        name: '详情',
      },
      {
        path: '/seller/404',
        name: '404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
