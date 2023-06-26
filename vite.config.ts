import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';

import child_process from 'child_process';
const commitHash = child_process.execSync('git rev-parse --short HEAD').toString().trim();
const commitYear = child_process.execSync('git log --pretty=format:"%cd" HEAD -1 --date=format:"%Y"').toString().trim();
const commitTimes = child_process.execSync('git rev-list HEAD | wc -l | awk "{print $1}"').toString().trim();
const branch = child_process.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const commitTime = child_process.execSync('git log --pretty=format:"%cd" HEAD -1 --date=format:"%Y-%m-%d %H:%M:%S"').toString().trim();

export default () => {
  return {
    define: {
      'process.platform': null,
      'process.version': null,
      GLOBAL_VAR: {
        COMMIT_ID: commitHash,
        COMMIT_YEAR: commitYear,
        COMMIT_TIMES: commitTimes,
        BRANCH: branch,
        COMMIT_TIME: commitTime,
      },
    },
    clearScreen: false,
    server: {
      hmr: { overlay: false },
      port: 5001,
      open: false,
      cors: true,
    },
    plugins: [
      vue(),
      svgLoader(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    build: {
      brotliSize: false,
      chunkSizeWarningLimit: 5000,
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
};
