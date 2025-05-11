import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vscode from '@tomjs/vite-plugin-vscode'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vscode()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sidebar: resolve(__dirname, 'sidebar.html'),
      },
    },
  },
})
