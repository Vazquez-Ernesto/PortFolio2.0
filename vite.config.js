import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste para GitHub Pages: cambia el nombre si tu repo es distinto
  base: 'http://localhost:3000/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000,
    open: true
  }
})
