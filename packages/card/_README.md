#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/card
  <a href="https://www.npmjs.com/package/@tidy-ui/card">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/card" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/card
```

```cmd
npm i @tidy-ui/card
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/card';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"
