import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'url';
import { readdirSync } from 'fs';

const pathToSrc = fileURLToPath(new URL('./src', import.meta.url));

const getAliasesToDirsOfSrc = () => {
  const dirsOfSrc = readdirSync(pathToSrc, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return dirsOfSrc.map((dir) => ({
    find: dir,
    replacement: fileURLToPath(new URL(`./src/${dir}`, import.meta.url)),
  }));
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), legacy()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      ...getAliasesToDirsOfSrc(),
    ],
  },
});
