/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { AddCircleIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
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
        <Button withType="simple">simple</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined Button in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button withType="outlined">outlined</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Hero Button in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Button withType="hero">hero</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button isDisabled>Disabled</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Loading blocked button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button isLoading>Loading...</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretch full width button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button isStretched>Stretched</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Uppercase button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button isUppercase>uppercase</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button withColor="major">major</Button>
        <Button withColor="minor">minor</Button>
        <Button withColor="neutral">neutral</Button>
        <Button withColor="info">info</Button>
        <Button withColor="success">success</Button>
        <Button withColor="warning">warning</Button>
        <Button withColor="danger">danger</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button withSize="xxs">xxs</Button>
        <Button withSize="xs">size-xs</Button>
        <Button withSize="sm">size-sm</Button>
        <Button withSize="md">size-md</Button>
        <Button withSize="lg">size-lg</Button>
        <Button withSize="xl">size-xl</Button>
        <Button withSize="xxl">size-xxl</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button withType="primary">primary</Button>
        <Button withType="outlined">outlined</Button>
        <Button withType="basic">basic</Button>
        <Button withType="simple">simple</Button>
        <Button withType="hero">hero</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button withType="primary" withColor="major">
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
        <Button withColor="neutral">
          <AddCircleIcon />
        </Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
