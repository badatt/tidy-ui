/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Button } from '../src';
import { Size, Tone } from '@tidy-ui/types';
import { Variant } from '../src/types';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button>Basic</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Button>Basic</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Simple Button in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Button variant="simple">simple</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined Button in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Button variant="outlined">outlined</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Hero Button in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Button variant="hero">hero</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button disabled>Disabled</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Loading blocked button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button loading>Loading...</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretch full width button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button stretched>Stretched</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Uppercase button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button uppercase>uppercase</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button tone={Tone[v]} key={i}>
              {Tone[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all size variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button size={Size[v]} key={i}>
              size-{Size[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all type variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button variant={Variant[v]} key={i}>
              {Variant[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gradients', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button gradient>basic button</Button>
        <Button variant="hero" gradient>
          basic button
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with all type variants in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button variant={Variant[v]} key={i}>
              {Variant[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button variant="primary" tone="major">
          <Icon.AddCircle />
          Settings
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with only icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button tone="neutral">
          <Icon.AddCircle />
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button h="3rem" w="15rem">
          custom dimension
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
