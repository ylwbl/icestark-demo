import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

// @ts-ignore
const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        loadScriptMode: 'import',
        // React app demo: https://github.com/ice-lab/react-materials/tree/master/scaffolds/icestark-child
        // entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/index.html',
        entry: 'http://localhost:3334/',
      }];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

runApp(appConfig);
