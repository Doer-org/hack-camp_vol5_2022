/// <reference types="vitest" />
import * as path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig, loadEnv, UserConfigExport } from 'vite'

export default ({ mode }): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    server: {
      port: parseInt(process.env.PORT ?? '3000'),
      cors: false,
    },
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // define: {
    //   global: 'window'
    // },
    esbuild: {
      jsxInject: "import React from 'react';"
    },
    
    test: { 
    },
  })
}
