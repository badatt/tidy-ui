/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Girth, Tone } from '../../types/src';
import { Progress } from '../src';

describe('Progress', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Progress value={80} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Progress value={80} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Progress variant="indeterminate" value={25} />
        <Progress variant="solid" value={75} />
        <Progress variant="striped" value={50} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Girths', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <div key={v}>
              <Progress variant="indeterminate" value={25} girth={Girth[v]} />
              <Progress variant="solid" value={75} girth={Girth[v]} />
              <Progress variant="striped" value={50} girth={Girth[v]} />
            </div>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <div key={v}>
              <Progress tone={Tone[v]} variant="indeterminate" value={25} />
              <Progress tone={Tone[v]} variant="solid" value={75} />
              <Progress tone={Tone[v]} variant="striped" value={50} />
            </div>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
