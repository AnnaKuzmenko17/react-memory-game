import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@memo': 'src/@memo',
    },
  },
});
