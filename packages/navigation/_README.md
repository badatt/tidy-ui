#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/navigation
  <a href="https://www.npmjs.com/package/@tidy-ui/navigation">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/navigation" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/navigation
```

```cmd
npm i @tidy-ui/navigation
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/navigation';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"

#include "../../internals/md/footer.md"
