import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: `src/index.ts`,
  plugins: [
    nodeResolve(),
    typescript({
      declaration: true,
      declarationDir: './dist',
    }),
  ],
  output: {
    banner: [`import { DEV } from 'cc/env';`].join('\n'),
    format: 'esm',
    file: `dist/index.js`,
  },
});
