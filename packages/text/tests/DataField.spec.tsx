/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { TColor } from '@tidy-ui/types';
import { DataField } from '../src';

const colors = ['major', 'minor', 'neutral', 'info', 'success', 'warning', 'danger'];

describe('Text', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <DataField lbl="default label" val="default value" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <DataField lbl="default label" val="default value" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('All color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {colors.map((c) => (
          <DataField clr={c as TColor} lbl={c} val={c} key={c} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('All accent variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {colors.map((c) => (
          <DataField acc={c as TColor} lbl={c} val={c} key={c} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With icons', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <DataField ico={<CheckCircleIcon />} lbl="settings icon" val="settings icon value" />
        <DataField ico={<CheckCircleIcon />} lbl="settings icon" acc="major" val="major accent value" />
        <DataField ico={<CheckCircleIcon />} lbl="success icon" acc="success" clr="success" val="success color value" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Other variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <DataField bld acc="minor" lbl="minor accent" val="minor accent bold value" />
        <DataField udl acc="success" lbl="success accent" val="success accent underline value" />
        <DataField itl acc="info" lbl="info accent" val="info accent italicized value" />
        <DataField dsb acc="warning" lbl="warning accent" val="warning accent disabled value" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
