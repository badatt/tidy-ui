/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Chip } from '../src';
import { Girth, Tone } from '../../commons/src';
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

  it('Girths', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip girth={Girth[v]} key={i}>
              Girth-{Girth[v]}
            </Chip>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled in light', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip isFilled></Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip isFilled icon={<Icon.AddCircle />}></Chip>
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

  it('Icon on chip', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip icon={<Icon.AddCircle />} placement="right">
          right
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Icon on chip in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip icon={<Icon.AddCircle />} placement="right">
          right
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip isClickable>isClickable</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip isFilled isClickable>
          isClickable
        </Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Clickable in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Chip isClickable>isClickable</Chip>
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

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Chip ele={<div />}>basic</Chip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
