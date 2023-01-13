import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react(), reactRefresh(), viteTsconfigPaths()],
});