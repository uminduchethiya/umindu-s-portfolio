import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/umindu-s-portfolio/', // This should match your repository name
  build: {
    outDir: 'dist',
  },
})