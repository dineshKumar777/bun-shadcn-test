import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
// import remarkGfm from 'remark-gfm';
// import remarkPrism from 'remark-prism';
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  plugins: [
    mdx({
      // remarkPlugins: [remarkGfm, remarkPrism],
      rehypePlugins: [rehypePrettyCode],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
