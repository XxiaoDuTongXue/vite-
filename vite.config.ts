import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 
import { viteMockServe } from "vite-plugin-mock";
// import type { ViteMockOptions } from 'vite-plugin-mock'; 
// command
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    viteMockServe({
      mockPath: "mock",
      localEnabled: true,
      // enable:command === 'serve'
    }),
    ],

    resolve: {
      alias:
        { '@': path.resolve('./src') }
    },
    // scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.scss";',
        },
      },
    },
  }
})
