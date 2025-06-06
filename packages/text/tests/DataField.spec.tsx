/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tone } from '../../types/src';
import { DataField, Text } from '../src';

describe('Text', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <DataField lbl="default label" val="default value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <DataField lbl="default label" val="default value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((v) => !isNaN(Number(v)))
          .map((v) => (
            <DataField key={v} tone={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tones in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Tone)
          .filter((v) => !isNaN(Number(v)))
          .map((v) => (
            <DataField key={v} tone={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Accents', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Tone)
          .filter((v) => !isNaN(Number(v)))
          .map((v) => (
            <DataField key={v} acc={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <DataField dsb lbl="warning accent" val="warning accent disabled value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom elements', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <DataField
          lbl={
            <Text.Caption uc udl>
              custom label
            </Text.Caption>
          }
          val={<Text.Subtitle2>custom val</Text.Subtitle2>}
        />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
