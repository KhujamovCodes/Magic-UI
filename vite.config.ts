import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("🔰🔰🔰 Welcome Man! 🔰🔰🔰");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
  }
});
