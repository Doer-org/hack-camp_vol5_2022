// import { resolve } from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '8000'),
  },
  plugins: [reactRefresh()],
  resolve: {
    // alias: [{ find: /^@\/(.*)/, replacement: resolve(__dirname, 'src/$1') }],
  },
  define: {
    global: 'window',
  },
})