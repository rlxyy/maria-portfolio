import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/maria-portfolio/', // <-- THIS IS CRUCIAL FOR GITHUB PAGES
})