/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Button } from '../src';
import { Size, Tone } from '@tidy-ui/types';
import { Variant } from '../src/types';

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
        <Button uppercase>uppercase</Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Tone).map((v, i) => (
          <Button tone={v} key={i}>
            {v}
          </Button>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Size).map((v, i) => (
          <Button size={v} key={i}>
            size-{v}
          </Button>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Variant).map((v, i) => (
          <Button variant={v} key={i}>
            {v}
          </Button>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gradients', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button gradient>basic button</Button>
        <Button variant="hero" gradient>
          basic button
        </Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with all type variants in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {Object.values(Variant).map((v, i) => (
          <Button variant={v} key={i}>
            {v}
          </Button>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Button variant="primary" tone="major">
          <Icon.AddCircle />
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
          <Icon.AddCircle />
        </Button>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
