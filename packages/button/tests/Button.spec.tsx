/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { AddCircleIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Button } from '../src';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button>Basic</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button>Basic</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Simple Button in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button variant="simple">simple</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined Button in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button variant="outlined">outlined</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Hero Button in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button variant="hero">hero</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button disabled>Disabled</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Loading blocked button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button loading>Loading...</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretch full width button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button stretched>Stretched</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Uppercase button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button uc>uppercase</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button tone="major">major</Button>
        <Button tone="minor">minor</Button>
        <Button tone="neutral">neutral</Button>
        <Button tone="info">info</Button>
        <Button tone="success">success</Button>
        <Button tone="warning">warning</Button>
        <Button tone="danger">danger</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button size="xxs">xxs</Button>
        <Button size="xs">size-xs</Button>
        <Button size="sm">size-sm</Button>
        <Button size="md">size-md</Button>
        <Button size="lg">size-lg</Button>
        <Button size="xl">size-xl</Button>
        <Button size="xxl">size-xxl</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button variant="primary">primary</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="basic">basic</Button>
        <Button variant="simple">simple</Button>
        <Button variant="hero">hero</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with all type variants in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button variant="primary">primary</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="basic">basic</Button>
        <Button variant="simple">simple</Button>
        <Button variant="hero">hero</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button variant="primary" tone="major">
          <AddCircleIcon />
          Settings
        </Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with only icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button tone="neutral">
          <AddCircleIcon />
        </Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
