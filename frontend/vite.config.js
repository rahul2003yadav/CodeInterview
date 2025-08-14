import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // or any directory you want your build files in
    emptyOutDir: true // cleans the directory before building
  }
})

