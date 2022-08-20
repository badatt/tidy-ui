/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Anchor } from '../src';

describe('Render Anchor', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders with no styles dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" launch>
          external link
        </Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" launch>
          external link
        </Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
