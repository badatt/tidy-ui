import React from 'react';
import { Code } from '../src';

export default {
  component: Code,
  title: 'Presentation/Code',
};

const text = `import React from 'react';
import { TidyUiProvider, orchidLight, ... } from '@tidy-ui/commons;'

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
`;

export const basic = () => <Code>{text}</Code>;

export const customMargin = () => (
  <>
    <Code margin="0 0 1rem 0">{text}</Code>
    <Code>{text}</Code>
  </>
);

export const customDimensions = () => (
  <Code h="10rem" w="30rem">
    {text}
  </Code>
);

export const noCopy = () => <Code noCopy>{text}</Code>;
