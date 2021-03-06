import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { CheckCircleIcon, RotatingCircleIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
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
  it('Renders with no styles dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
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
          <Button text="neutral" appearance="basic" color="neutral" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Basic neutral button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="neutral" appearance="basic" color="neutral" />
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
  it('Neutral button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
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
          <Button text="primary" appearance="primary" color="major" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="primary" appearance="primary" color="major" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="secondary" appearance="outlined" color="minor" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="secondary" appearance="outlined" color="minor" />
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
  it('Outlined neutral button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
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
          <Button text="hero" appearance="hero" color="minor" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Hero button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="hero" appearance="hero" color="minor" />
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
  it('Hero neutral button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
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
          <Button text="Settings" appearance="primary" icon={<CheckCircleIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button with icon and text dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="Settings" appearance="primary" icon={<CheckCircleIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled disabled button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="info" appearance="primary" color="info" disable />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled disabled button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="info" appearance="primary" color="info" disable />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined full width button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="warning" appearance="outlined" color="warning" stretch />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outlined full width button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="warning" appearance="outlined" color="warning" stretch />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled uppercase button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="danger" appearance="primary" color="danger" uppercase />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled uppercase button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="danger" appearance="primary" color="danger" uppercase />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled loading button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button text="primary" appearance="primary" color="major" loading />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Filled loading button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button text="primary" appearance="primary" color="major" loading />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Only icon button', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Button appearance="primary" color="major" icon={<RotatingCircleIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Only icon button dark', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Button appearance="primary" color="major" icon={<RotatingCircleIcon />} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
