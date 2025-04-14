<p align="center">
  <img width="250" src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/storybook-logo.png" alt="Tidy UI" />
</p>

<h1 align="center">
  @tidy-ui/presentation
  <a href="https://www.npmjs.com/package/@tidy-ui/presentation">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/presentation" />
    <img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/presentation">
  </a>
</h1>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=alert_status"
      alt="Quality Gate Status"
    />
  </a>
</p>
<p align="center">
  <a href="https://github.com/badatt/tidy-ui/actions/workflows/publish-wf.yml" target="_blank">
    <img src="https://github.com/badatt/tidy-ui/actions/workflows/publish-wf.yml/badge.svg" alt="Publishing" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=coverage" alt="Coverage" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=vulnerabilities"
      alt="Vulnerabilities"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=bugs" alt="Bugs" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=security_rating"
      alt="Security Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=sqale_rating"
      alt="Maintainability Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=code_smells"
      alt="Code Smells"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=ncloc"
      alt="Lines of Code"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=sqale_index"
      alt="Technical Debt"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=reliability_rating"
      alt="Reliability Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui" target="_blank">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=duplicated_lines_density"
      alt="Duplicated Lines (%)"
    />
  </a>
</p>

## Project Description

Tidy UI is a family of components necessary for your react application. The components are powered <a href="https://styled-components.com/" target="_blank">styled-components</a>, features include css-in-js, theming etc

## Build with

- react
- styled-components
- rollup
- lerna

## Installation

```cmd
yarn add @tidy-ui/presentation
```

```cmd
npm i @tidy-ui/presentation
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';
import { ... } from '@tidy-ui/presentation';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

### Storybook

<a href="https://storybook.tidy-ui.com/?path=/story/presentation-alert--basic" target="_blank"><img src="https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg"/></a>

Visit the storybook and start using components in your app.

## Packages

These are the packages that come under presentation class of tidy-ui components

<table>
  <thead>
    <tr><th>Package</th><th>Version</th><th>Downloads</th></tr>
  </thead>
  <tbody>
  <tr>
    <td>@tidy-ui/alert</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/alert"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/alert"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/alert"></td>
  </tr>
  <tr>
    <td>@tidy-ui/badge</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/badge"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/badge"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/badge"></td>
  </tr>
  <tr>
    <td>@tidy-ui/button</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/button"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/button"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/button"></td>
  </tr>
  <tr>
    <td>@tidy-ui/card</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/card"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/card"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/card"></td>
  </tr>
  <tr>
    <td>@tidy-ui/chip</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/chip"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/chip"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/chip"></td>
  </tr>
    <tr>
    <td>@tidy-ui/code</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/code"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/code"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/code"></td>
  </tr>
  <tr>
    <td>@tidy-ui/message</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/message"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/message"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/message"></td>
  </tr>
  <tr>
    <td>@tidy-ui/panel</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/panel"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/panel"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/panel"></td>
  </tr>
  <tr>
    <td>@tidy-ui/paper</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/paper"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/paper"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/paper"></td>
  </tr>
  <tr>
    <td>@tidy-ui/tag</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/tag"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/tag"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/tag"></td>
  </tr>
  <tr>
    <td>@tidy-ui/text</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/text"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/text"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/text"></td>
  </tr>
  <tr>
    <td>@tidy-ui/tooltip</td>
    <td><a href="https://www.npmjs.com/package/@tidy-ui/tooltip"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/tooltip"></a></td>
    <td><img alt="npm" src="https://img.shields.io/npm/dw/@tidy-ui/tooltip"></td>
  </tr>
  </tbody>
</table>

---

<p align="center">
  <a href="CHANGELOG.md">
    <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=changelog&query=%24.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbadatt%2Ftidy-ui%2Freleases%2Flatest" />
  </a>
  <a href="https://github.com/badatt/tidy-ui/releases">
    <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=releases&query=%24.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbadatt%2Ftidy-ui%2Freleases%2Flatest" />
  </a>
</p>
