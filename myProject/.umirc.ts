import { defineConfig } from 'umi';
const { resolve } = require('path');
// 系统默认配置
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    utils: resolve(__dirname, './src/utils'), // 别名映射
    components: resolve(__dirname, './src/components'), // 别名映射
    common: resolve(__dirname, './src/common'), // 别名映射
  },
  proxy: {
    '/api': {
      target: 'http:127.0.0.1/7001',
      changeOrigin: true,
    },
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  // fastRefresh: {},
});
