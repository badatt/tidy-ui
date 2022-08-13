<p align="center">
  <img width="250" src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/docs/tidi-ui-logo-320X320.png" alt="Tidy UI" />
</p>


<h1 align="center">
  @tidy-ui/commons
  <a href="https://www.npmjs.com/package/@tidy-ui/commons">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tidy-ui/commons" />
  </a>
</h1>
<p align="center">
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=alert_status"
      alt="Quality Gate Status"
    />
  </a>
</p>
<p align="center">
  <a href="https://github.com/badatt/tidy-ui/actions/workflows/publish-wf.yml">
    <img src="https://github.com/badatt/tidy-ui/actions/workflows/publish-wf.yml/badge.svg" alt="Publishing" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=coverage" alt="Coverage" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=vulnerabilities"
      alt="Vulnerabilities"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=bugs" alt="Bugs" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=security_rating"
      alt="Security Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=sqale_rating"
      alt="Maintainability Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=code_smells"
      alt="Code Smells"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=ncloc"
      alt="Lines of Code"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=sqale_index"
      alt="Technical Debt"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=reliability_rating"
      alt="Reliability Rating"
    />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=badatt_tidy-ui">
    <img
      src="https://sonarcloud.io/api/project_badges/measure?project=badatt_tidy-ui&metric=duplicated_lines_density"
      alt="Duplicated Lines (%)"
    />
  </a>
</p>


## Project Description

Tidy UI is a family of components necessary for your react application. The components are powered [styled-components](https://styled-components.com/), features include css-in-js, theming etc

## Build with

- react
- styled-components
- rollup


## Installation

```cmd
yarn add @tidy-ui/commons
```

```cmd
npm i @tidy-ui/commons
```

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight } from '@tidy-ui/commons';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

