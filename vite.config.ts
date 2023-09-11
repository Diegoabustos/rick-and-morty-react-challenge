import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://diegoabustos.github.io/rick-and-morty-react-challenge/",
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5000,
  },
})
