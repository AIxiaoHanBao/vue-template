import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 打包的静态资源引用路径
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy:{

    }

  }


})
