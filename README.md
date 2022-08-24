<p align="center">
  <img width="250" src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/storybook-logo.png" alt="Tidy UI" />
</p>

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

## Getting started

Here is a sample root level component that should enclose all tidy-ui components

```typescript
import React from 'react';
import { TidyUiProvider, orchidLight, ... } from '@tidy-ui/commons';

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
```

Include required components with in the place holder `...`

### Storybook

<a href="https://main--62f5d4e6c0b101cafe0f9e33.chromatic.com" target="_blank"><img src="https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg"/></a>

Visit the storybook and start using components in your app.

## Packages and groups

<div align="center">
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/presentation">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-presentation.png"/>
  </a>
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/layout">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-layout.png"/>
  </a>
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/commons">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-commons.png"/>
  </a>
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/icons">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-icons.png"/>
  </a>
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/theme">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-theme.png"/>
  </a>
  <a href="https://github.com/badatt/tidy-ui/tree/main/packages/types">
    <img src="https://raw.githubusercontent.com/badatt/tidy-ui/main/internals/assets/images/package-card-types.png"/>
  </a>
</div>

---

<p align="center">
  <a href="CHANGELOG.md">
    <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=changelog&query=%24.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbadatt%2Ftidy-ui%2Freleases%2Flatest" />
  </a>
  <a href="https://github.com/badatt/tidy-ui/releases">
    <img src="https://img.shields.io/badge/dynamic/json?color=blue&label=releases&query=%24.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fbadatt%2Ftidy-ui%2Freleases%2Flatest" />
  </a>
</p>
