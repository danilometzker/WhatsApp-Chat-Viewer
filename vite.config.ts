import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylex from '@stylexjs/babel-plugin';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            stylex,
            {
              runtimeInjection: true,
              treeshakeCompensation: true,
            },
          ],
        ],
      },
    }),
  ],
});
