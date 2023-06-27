/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Frame } from '../src';

describe('Frame', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Frame />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Sharp', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame isSharp />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame height="240px" width="350px" />
        <Frame variant="circle" size="240px" />
        <Frame variant="line" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Wrapped', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame isWrapped>wrapped</Frame>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Loaded', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame isLoaded>loaded</Frame>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Loaded & wrapped', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Frame isLoaded isWrapped>
          loaded and wrapped
        </Frame>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
