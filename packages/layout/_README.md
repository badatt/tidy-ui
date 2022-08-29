#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/layout
  <a href="https://www.npmjs.com/package/@tidy-ui/layout">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/layout" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/layout
```

```cmd
npm i @tidy-ui/layout
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/layout';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"

## Packages

These are the packages that come under layout class of tidy-ui components

<table>
  <thead>
    <tr><th>Package</th><th>Version</th><th>Downloads</th></tr>
  </thead>
  <tbody>
  <tr>
    <td>@tidy-ui/container</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/container"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/container"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/container"></td>
  </tr>
  <tr>
    <td>@tidy-ui/divider</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/divider"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/divider"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/divider"></td>
  </tr>
  <tr>
    <td>@tidy-ui/flexbox</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/flexbox"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/flexbox"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/flexbox"></td>
  </tr>
  <tr>
    <td>@tidy-ui/grid</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/grid"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/grid"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/grid"></td>
  </tr>
</table>

#include "../../internals/md/footer.md"
