import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import replace from '@rollup/plugin-replace';

const pkg = require(`./package.json`);

const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

const pkgdependencies = dependencies(pkg);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/dist/index.js',
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    nodePolyfills(),
    nodeResolve({ extensions }),
    typescript(),
    json(),
  ],
  external: (id) => pkgdependencies.includes(id),
};
