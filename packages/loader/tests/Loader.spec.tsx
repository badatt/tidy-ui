/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Girth, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Loader } from '../src';

describe('Loader', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Loader />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Loader />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Loader />
        <Loader variant="ellipses" />
        <Loader variant="pulse" />
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
              <Loader girth={Girth[v]} />
              <Loader girth={Girth[v]} variant="ellipses" />
              <Loader girth={Girth[v]} variant="pulse" />
            </div>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
