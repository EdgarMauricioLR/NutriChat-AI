import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esta línea le dice a la app que vive en esta subcarpeta en GitHub
  base: '/NutriChatAITest/', 
})