/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { DangerousIcon } from '@tidy-ui/commons';
import { orchidLight, styled } from '@tidy-ui/theme';
import { Badge } from '../src';

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

describe('Badge', () => {
  test('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badges with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge color="major">
          <Icon />
        </Badge>
        <Badge color="minor">
          <Icon />
        </Badge>
        <Badge color="neutral">
          <Icon />
        </Badge>
        <Badge color="info">
          <Icon />
        </Badge>
        <Badge color="success">
          <Icon />
        </Badge>
        <Badge color="warning">
          <Icon />
        </Badge>
        <Badge color="danger">
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge without max value should show 99+', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge withData={198}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge with max value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge withData={198} withMax={150}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge with a dot', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge isDotted>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge with a dot and it blinks', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge isDotted isBlink>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge which is invisible', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge isInvisible withData={50}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Do not show zero value by default', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge withData={0}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Force show zero value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge isShowZero withData={0}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
