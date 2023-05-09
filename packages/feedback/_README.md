#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/feedback
  <a href="https://www.npmjs.com/package/@tidy-ui/feedback">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/feedback" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/feedback
```

```cmd
npm i @tidy-ui/feedback
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/feedback';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"

## Packages

These are the packages that come under feedback class of tidy-ui components

<table>
  <thead>
    <tr><th>Package</th><th>Version</th><th>Downloads</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>@tidy-ui/notification</td>
      <td><a href="https://www.npmjs.com/package/@tidy-ui/notification"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/notification"></a></td>
      <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/notification"></td>
    </tr>
    <tr>
      <td>@tidy-ui/toaster</td>
      <td><a href="https://www.npmjs.com/package/@tidy-ui/toaster"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/toaster"></a></td>
      <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/toaster"></td>
    </tr>
  </tbody>
</table>

#include "../../internals/md/footer.md"
