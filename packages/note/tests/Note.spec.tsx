/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Note } from '../src';

describe('Note', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Note>basic</Note>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Note>basic</Note>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Reality render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Note isReal>reality</Note>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode reality render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Note isReal>reality</Note>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Note ele={<div />}>basic</Note>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
