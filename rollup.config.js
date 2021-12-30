import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const packageJson = process.env.PACKAGE_NAME && require(`./packages/${process.env.PACKAGE_NAME}/package.json`);

const dependencies = ({ peerDependencies }) => Object.keys(peerDependencies || {});

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
    json(),
    nodePolyfills(),
    nodeResolve({ extensions, preferBuiltins: true }),
    commonjs(),
    terser(),
    typescript({
      inlineSources: true,
      useTsconfigDeclarationDir: true,
      verbosity: 2,
      abortOnError: false,
    }),
  ],
  external: (id) => deps.includes(id),
};
