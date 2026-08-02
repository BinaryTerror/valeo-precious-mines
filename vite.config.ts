import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/valeo-precious-mines/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
