import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { Badge } from '..';

describe('Badge', () => {
  test('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Major color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge color="major"/>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dot variant', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge variant="dot" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('invisible', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge invisible content={10} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('show zero value too', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge showZero content={0} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('set a maximum value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Badge max={9} content={10} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
