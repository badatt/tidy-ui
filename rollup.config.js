import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = process.env.PACKAGE_NAME && require(`./packages/${process.env.PACKAGE_NAME}/package.json`);

const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

const deps = dependencies(packageJson);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: {
    file: packageJson.main,
    format: 'es',
  },
  plugins: [
    replace({ preventAssignment: true }),
    nodePolyfills(),
    nodeResolve({ extensions }),
    commonjs(),
    typescript(),
    json(),
  ],
  external: (id) => deps.includes(id),
};
