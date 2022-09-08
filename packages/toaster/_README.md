#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/toaster
  <a href="https://www.npmjs.com/package/@tidy-ui/toaster">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/toaster" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/toaster
```

```cmd
npm i @tidy-ui/toaster
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/toaster';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"

#include "../../internals/md/footer.md"
