/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Button } from '../src';
import { Girth, Tone, ButtonVariant } from '../../types/src';

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
        <Button>outlined</Button>
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
        <Button isLoading>Loading...</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretch full width button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button isStretched>Stretched</Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Uppercase button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button isUppercase>uppercase</Button>
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

  it('Button with all girth variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button girth={Girth[v]} key={i}>
              girth-{Girth[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button with all type variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(ButtonVariant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button variant={ButtonVariant[v]} key={i}>
              {ButtonVariant[v]}
            </Button>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gradients', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Button isGradient>basic button</Button>
        <Button variant="hero" isGradient>
          basic button
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Button with all type variants in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(ButtonVariant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button variant={ButtonVariant[v]} key={i}>
              {ButtonVariant[v]}
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
        <Button height="3rem" width="15rem">
          custom dimension
        </Button>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button only icon with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button icon={<Icon.Menu />} tone={Tone[v]} key={i} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Button only icon with all color variants in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Button icon={<Icon.Menu />} tone={Tone[v]} key={i} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
