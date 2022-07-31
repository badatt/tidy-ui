import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { Text } from '../src';

describe('Text', () => {
  it('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text>default text</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H1 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h1">h1: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H2 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h2">h2: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H3 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h3">h3: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H4 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h4">h4: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H5 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h5">h5: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('H6 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="h6">h6: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('title1 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="title1">title1: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('subtitle1 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle1">subtitle1: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('title2 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="title2">title2: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('subtitle2 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2">subtitle2: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('body1 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="body1">body1: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('body2 element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="body2">body2: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('p element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="p">p: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('span element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="span">span: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('caption element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="caption">caption: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('code element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="code">code: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('hero element', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="hero">hero: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('major color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="major">
            major: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="major">
            major: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('minor color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="minor">
            minor: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="minor">
            minor: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('info color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="info">
            info: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="info">
            info: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('neutral color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="neutral">
            neutral: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="neutral">
            neutral: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('success color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="success">
            success: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="success">
            success: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('warning color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="warning">
            warning: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="warning">
            warning: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('danger color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text as="subtitle2" color="danger">
            danger: The quick brown fox jumps over the lazy dog
          </Text>
          <Text as="body2" color="danger">
            danger: The quick brown fox jumps over the lazy dog
          </Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('bold transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text b>bold: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('underlined transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text u>underlined: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('italicized transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text i>italicized: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('uppercase transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text uc>uppercase: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('lowercase transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text lc>lowercase: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('capitalized transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text cc>capitalized: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('disabled transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text disable>disabled: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('stretched transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text stretch>stretched: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('centered transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Text center>centered: The quick brown fox jumps over the lazy dog</Text>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('truncated transform', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <div style={{ width: 200 }}>
            <Text truncate>truncated: The quick brown fox jumps over the lazy dog</Text>
          </div>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
