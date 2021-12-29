import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { GearIcon } from '@tidy-ui/icons';
import { orchidLight } from '@tidy-ui/theme';
import { Button } from '../src';

describe('Render Button', () => {
  it('Renders with no styles', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Basic neutral button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="neutral" appearance="basic" kind="neutral" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Neutral button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="neutral" appearance="basic" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="primary" appearance="filled" kind="primary" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="secondary" appearance="outlined" kind="secondary" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined neutral button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="secondary" appearance="outlined" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Hero button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="hero" appearance="hero" kind="secondary" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Hero neutral button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="hero" appearance="hero" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon and text', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="Settings" appearance="filled" icon={<GearIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled disabled button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="info" appearance="filled" kind="info" disabled />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined full width button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="warning" appearance="outlined" kind="warning" fullWidth />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled uppercase button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="danger" appearance="filled" kind="danger" uppercase />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled loading button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="primary" appearance="filled" kind="primary" loading />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Only icon button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button appearance="filled" kind="primary" icon={<GearIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});