import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist' },
      ],
      verbose: true, // Opcional, exibe mensagens detalhadas no console
    }),
  ],
})
