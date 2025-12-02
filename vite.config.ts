import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto debe coincidir con el nombre de tu repositorio en GitHub
  base: '/NutriChat-AI/', 
  define: {
    // Esto evita el error "Uncaught ReferenceError: process is not defined" en el navegador
    'process.env': {}
  }
})