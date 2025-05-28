module.exports = {
  plugins: ['babel-plugin-styled-components', { displayName: true, ssr: true }],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
