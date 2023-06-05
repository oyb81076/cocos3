import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: `src/index.ts`,
  plugins: [
    nodeResolve(),
    typescript({
      declaration: true,
      declarationDir: './build',
    }),
    replace({
      preventAssignment: false,
      values: {},
    }),
  ],
  output: {
    banner: [
      `import { DEV } from 'cc/env';`,
      `const module = undefined`,
      `const process = { env: { NODE_ENV: DEV ? 'development' : 'production' } }`,
    ].join('\n'),
    format: 'esm',
    file: `build/index.js`,
  },
});
