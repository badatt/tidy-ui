import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

const packageJson = process.env.PACKAGE_NAME && require(`./packages/${process.env.PACKAGE_NAME}/package.json`);

const dependencies = ({ peerDependencies, dependencies }) =>
  Object.keys({ ...peerDependencies, ...dependencies } || {});

const deps = dependencies(packageJson);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      banner: '/* eslint-disable */',
      exports: 'auto',
    },
    {
      format: 'es',
      file: packageJson.module,
      banner: '/* eslint-disable */',
      exports: 'auto',
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    json(),
    nodePolyfills(),
    nodeResolve({ extensions, preferBuiltins: true }),
    commonjs(),
    terser(),
    typescript(),
  ],
  external: (id) => deps.includes(id),
};
