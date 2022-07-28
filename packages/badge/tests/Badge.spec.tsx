/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { DangerousIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight, styled } from '@tidy-ui/theme';
import { Badge } from '../src';

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

describe('Badge', () => {
  test('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge withData={50}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badge without data', () => {
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
        <Badge withData={50} withColor="major">
          <Icon />
        </Badge>
        <Badge withData={60} withColor="minor">
          <Icon />
        </Badge>
        <Badge withData={70} withColor="neutral">
          <Icon />
        </Badge>
        <Badge withData={80} withColor="success">
          <Icon />
        </Badge>
        <Badge withData={90} withColor="info">
          <Icon />
        </Badge>
        <Badge withData={100} withColor="warning">
          <Icon />
        </Badge>
        <Badge withData={110} withColor="danger">
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badges with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge withData={50} withColor="major" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={60} withColor="minor" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={70} withColor="neutral" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={80} withColor="success" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={90} withColor="info" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={100} withColor="warning" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={110} withColor="danger" isOutlined>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Badges in dark mode with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Badge withData={50} withColor="major" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={60} withColor="minor" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={70} withColor="neutral" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={80} withColor="success" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={90} withColor="info" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={100} withColor="warning" isOutlined>
          <Icon />
        </Badge>
        <Badge withData={110} withColor="danger" isOutlined>
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
