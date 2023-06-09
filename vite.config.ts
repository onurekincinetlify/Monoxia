import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/database'],
  },
  build: {
    rollupOptions: {
      output: {
        // Hataları ve uyarıları konsolda göstermez
        format: 'es',
        // Hata izleme araçlarını devre dışı bırakır
        sourcemap: false
      },
    },
  },
})
