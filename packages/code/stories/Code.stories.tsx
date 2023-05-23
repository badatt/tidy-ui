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

export const noCopy = () => <Code canCopy={false}>{text}</Code>;
