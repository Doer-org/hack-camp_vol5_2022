import * as path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    server: {
      port: parseInt(process.env.PORT ?? '3000'),
      cors: false,
      proxy: {
        '/api': {
          ws: true,
          target: process.env.VITE_API_BASE_URL,
          rewrite: (path) => path.replace('/api', ''),
        },
      },
    },
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      global: 'window',
    },
    esbuild: {
      jsxInject: "import React from 'react';",
    },
  })
}
