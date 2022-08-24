import * as path from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '8000'),
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    global: 'window',
  },
  esbuild: {
    jsxInject: "import React from 'react';",
  },
})