/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { DangerousIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight, styled } from '@tidy-ui/commons';
import { Badge } from '../src';

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

describe('Badge', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without data', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50} tone="major">
          <Icon />
        </Badge>
        <Badge data={60} tone="minor">
          <Icon />
        </Badge>
        <Badge data={70} tone="neutral">
          <Icon />
        </Badge>
        <Badge data={80} tone="success">
          <Icon />
        </Badge>
        <Badge data={90} tone="info">
          <Icon />
        </Badge>
        <Badge data={100} tone="warning">
          <Icon />
        </Badge>
        <Badge data={110} tone="danger">
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50} tone="major" outlined>
          <Icon />
        </Badge>
        <Badge data={60} tone="minor" outlined>
          <Icon />
        </Badge>
        <Badge data={70} tone="neutral" outlined>
          <Icon />
        </Badge>
        <Badge data={80} tone="success" outlined>
          <Icon />
        </Badge>
        <Badge data={90} tone="info" outlined>
          <Icon />
        </Badge>
        <Badge data={100} tone="warning" outlined>
          <Icon />
        </Badge>
        <Badge data={110} tone="danger" outlined>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges in dark mode with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Badge data={50} tone="major" outlined>
          <Icon />
        </Badge>
        <Badge data={60} tone="minor" outlined>
          <Icon />
        </Badge>
        <Badge data={70} tone="neutral" outlined>
          <Icon />
        </Badge>
        <Badge data={80} tone="success" outlined>
          <Icon />
        </Badge>
        <Badge data={90} tone="info" outlined>
          <Icon />
        </Badge>
        <Badge data={100} tone="warning" outlined>
          <Icon />
        </Badge>
        <Badge data={110} tone="danger" outlined>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without max value should show 99+', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={198}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with max value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={198} max={150}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge dotted>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot and it blinks', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge dotted blink>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge which is invisible', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge hidden data={50}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Do not show zero value by default', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={0}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Force show zero value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge show0 data={0}>
          <Icon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
