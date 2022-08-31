/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidDark, orchidLight, styled } from '@tidy-ui/commons';
import { Badge } from '../src';

const DangerIcon = styled(Icon.Dangerous)`
  height: 20px;
  width: 20px;
`;

describe('Badge', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without data', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50} tone="major">
          <DangerIcon />
        </Badge>
        <Badge data={60} tone="minor">
          <DangerIcon />
        </Badge>
        <Badge data={70} tone="neutral">
          <DangerIcon />
        </Badge>
        <Badge data={80} tone="success">
          <DangerIcon />
        </Badge>
        <Badge data={90} tone="info">
          <DangerIcon />
        </Badge>
        <Badge data={100} tone="warning">
          <DangerIcon />
        </Badge>
        <Badge data={110} tone="danger">
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={50} tone="major" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={60} tone="minor" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={70} tone="neutral" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={80} tone="success" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={90} tone="info" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={100} tone="warning" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={110} tone="danger" outlined>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badges in dark mode with all outlined variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Badge data={50} tone="major" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={60} tone="minor" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={70} tone="neutral" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={80} tone="success" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={90} tone="info" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={100} tone="warning" outlined>
          <DangerIcon />
        </Badge>
        <Badge data={110} tone="danger" outlined>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge without max value should show 99+', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={198}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with max value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={198} max={150}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge dotted>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge with a dot and it blinks', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge dotted blink>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge which is invisible', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge hidden data={50}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Do not show zero value by default', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge data={0}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Force show zero value', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Badge show0 data={0}>
          <DangerIcon />
        </Badge>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
