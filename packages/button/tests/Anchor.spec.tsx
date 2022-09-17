/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Anchor } from '../src';

describe('Render Anchor', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders with no styles dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" launch>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" launch>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
