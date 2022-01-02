import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight, orchidDark } from '@tidy-ui/theme';
import { Anchor } from '..';

describe('Render Anchor', () => {
  it('Renders with no styles', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Anchor href="https://www.google.com/">simple link</Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders with no styles dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Anchor href="https://www.google.com/">simple link</Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Anchor href="https://www.google.com/" newTab>
            external link
          </Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Anchor href="https://www.google.com/" newTab>
            external link
          </Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Anchor href="https://www.google.com/" disable>
            external link
          </Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Anchor href="https://www.google.com/" disable>
            external link
          </Anchor>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
