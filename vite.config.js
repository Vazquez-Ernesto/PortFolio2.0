import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste para GitHub Pages: cambia el nombre si tu repo es distinto
  base: '/PortFolio2.0/',
  server: {
    port: 3000,
    open: true
  }
})
