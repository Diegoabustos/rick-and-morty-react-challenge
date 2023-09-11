import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Diegoabustos/rick-and-morty-react-challenge/",
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5000,
  },
})
