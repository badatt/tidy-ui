#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/tag
  <a href="https://www.npmjs.com/package/@tidy-ui/tag">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/tag" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/tag
```

```cmd
npm i @tidy-ui/tag
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/tag';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"
