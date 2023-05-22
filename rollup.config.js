/* eslint-disable jsdoc/require-description */
/* eslint-disable jsdoc/require-jsdoc */
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkgName = process.env.PACKAGE_NAME;

const packageJson = pkgName && require(`./packages/${pkgName}/package.json`);

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

const cjs = {
  exports: 'named',
  format: 'cjs',
  interop: 'auto',
  sourcemap: true,
};

const esm = {
  format: 'esm',
  interop: 'auto',
  sourcemap: true,
};

const getCJS = (override) => ({ ...cjs, ...override });
const getESM = (override) => ({ ...esm, ...override });

const commonPlugins = [
  typescript({
    exclude: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.stories.tsx', 'dist'],
    outputToFilesystem: true,
    tsconfig: `tsconfig.build.json`,
  }),
  sourceMaps(),
  json(),
  nodePolyfills(),
  nodeResolve({ extensions, preferBuiltins: true }),
  commonjs({
    esmExternals: false,
    ignoreGlobal: true,
  }),
  /** @type {import('rollup').Plugin} */
  ({
    name: 'postprocessing',
    // Rollup 2 injects globalThis, which is nice, but doesn't really make sense for Microbundle.
    // Only ESM environments necessitate globalThis, and UMD bundles can't be properly loaded as ESM.
    // So we remove the globalThis check, replacing it with `this||self` to match Rollup 1's output:
    renderChunk(code, chunk, opts) {
      if (opts.format === 'umd') {
        // minified:
        code = code.replace(/([a-zA-Z$_]+)="undefined"!=typeof globalThis\?globalThis:(\1\|\|self)/, '$2');
        // unminified:
        code = code.replace(
          /(global *= *)typeof +globalThis *!== *['"]undefined['"] *\? *globalThis *: *(global *\|\| *self)/,
          '$1$2',
        );
        return { code, map: null };
      }
    },
  }),
];

const minifierPlugin = terser({
  compress: {
    keep_infinity: true,
    passes: 10,
    pure_getters: true,
  },
  ecma: 5,
  format: {
    comments: /^\s*([@#]__[A-Z]+__\s*$|@cc_on)/,
    preserve_annotations: true,
    wrap_func_args: false,
  },
});

const configBase = {
  // \0 is rollup convention for generated in memory modules
  external: (id) => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/') && deps.includes(id),
  input: './src/index.ts',
  plugins: commonPlugins,
  watch: {
    include: 'src/**',
  },
};

const serverConfig = {
  ...configBase,
  output: [getESM({ file: 'dist/index.esm.js' }), getCJS({ file: 'dist/index.cjs.js' })],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(true),
      window: undefined,
    }),
    minifierPlugin,
  ),
};

const browserConfig = {
  ...configBase,
  output: [getESM({ file: 'dist/index.browser.esm.js' }), getCJS({ file: 'dist/index.browser.cjs.js' })],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
    }),
    minifierPlugin,
  ),
};

export default [serverConfig, browserConfig];
