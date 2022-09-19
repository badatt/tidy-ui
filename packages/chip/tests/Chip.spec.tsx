/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Size } from '../../types/src';
import { Chip } from '../src';
import { Tone } from '../../types/src';
import { Icon } from '../../commons/src';

describe('Chip', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip>basic</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip>basic</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sizes', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip size={Size[v]} key={i}>
              Size-{Size[v]}
            </Chip>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined in light', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip outlined>outlined</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip outlined>outlined</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]}>
              {Tone[v]}
            </Chip>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Icon on left', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip icon={<Icon.AddCircle />} placement="left">
          left
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Icon on right', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip icon={<Icon.AddCircle />} placement="right">
          right
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Icon on outlined chip', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip icon={<Icon.AddCircle />} outlined placement="right">
          right
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Icon on outlined chip in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip icon={<Icon.AddCircle />} outlined placement="right">
          right
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip clickable>clickable</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable outlined', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip clickable outlined>
          clickable
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable outlined in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip clickable outlined>
          clickable
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip disabled>disabled</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
