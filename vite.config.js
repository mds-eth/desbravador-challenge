import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@contexts': '/src/contexts',
      '@components': '/src/components',
      '@schemas': '/src/schemas',
      '@pages': '/src/pages',
    },
  },
})
