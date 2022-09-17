/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Badge } from '../src';
import { Tone } from '../../types/src';

describe('Badge', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge data={50}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without data', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((t, i) => (
            <Badge data={(i + 1) * 10} tone={Tone[t]} key={i}>
              <Icon ele={<Icon.Dangerous />} />
            </Badge>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all outlined variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((t, i) => (
            <Badge data={(i + 1) * 10} tone={Tone[t]} key={i} outlined>
              <Icon ele={<Icon.Dangerous />} />
            </Badge>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges in dark mode with all outlined variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((t, i) => (
            <Badge data={(i + 1) * 10} tone={Tone[t]} key={i} outlined>
              <Icon ele={<Icon.Dangerous />} />
            </Badge>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without max value should show 99+', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge data={198}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with max value', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge data={198} max={150}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge dotted>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot and it blinks', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge dotted blink>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge which is invisible', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge hidden data={50}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Do not show zero value by default', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge data={0}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Force show zero value', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Badge show0 data={0}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
