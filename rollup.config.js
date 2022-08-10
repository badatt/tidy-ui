import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import json from 'rollup-plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const packageJson = process.env.PACKAGE_NAME && require(`./packages/${process.env.PACKAGE_NAME}/package.json`);

/**
 * Getting all dependency from package json
 *
 * @param {{}} dependencies all peerDependencies & dependencies
 * @returns {string[]} all dependencies as string array
 */
const formattedDeps = ({ peerDependencies, dependencies }) =>
  Object.keys({ ...peerDependencies, ...dependencies } || {});

const deps = formattedDeps(packageJson);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  /**
   * include external dependencies
   *
   * @param {string} id dependency name
   * @returns {boolean} whether if the dependency included
   */
  external: (id) => deps.includes(id),
  input: 'src/index.ts',
  output: [
    {
      banner: '/* eslint-disable */',
      dir: 'dist',
      exports: 'auto',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
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
};
