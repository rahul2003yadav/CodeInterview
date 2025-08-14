import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // separate output directory from public
    emptyOutDir: true
  },
  publicDir: 'public' // default static assets directory
})


