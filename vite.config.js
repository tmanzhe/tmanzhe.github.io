import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tutorial/",
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Include both uppercase and lowercase

})
