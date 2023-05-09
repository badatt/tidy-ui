#include "../../internals/md/banner-logo.md"

<h1 align="center">
  @tidy-ui/form
  <a href="https://www.npmjs.com/package/@tidy-ui/form">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/form" />
  </a>
</h1>
#include "../../internals/md/checks.md"

#include "../../internals/md/project-description.md"

## Installation

```cmd
yarn add @tidy-ui/form
```

```cmd
npm i @tidy-ui/form
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/form';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

#include "../../internals/md/storybook-link.md"

## Packages

These are the packages that come under form class of tidy-ui components

<table>
  <thead>
    <tr><th>Package</th><th>Version</th><th>Downloads</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>@tidy-ui/checkbox</td>
      <td><a href="https://www.npmjs.com/package/@tidy-ui/checkbox"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/checkbox"></a></td>
      <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/checkbox"></td>
    </tr>
    <tr>
      <td>@tidy-ui/input</td>
      <td><a href="https://www.npmjs.com/package/@tidy-ui/input"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/input"></a></td>
      <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/input"></td>
    </tr>
    <tr>
      <td>@tidy-ui/radio</td>
      <td><a href="https://www.npmjs.com/package/@tidy-ui/radio"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/radio"></a></td>
      <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/radio"></td>
    </tr>
  </tbody>
</table>

#include "../../internals/md/footer.md"
