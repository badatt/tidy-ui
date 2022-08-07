/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
import { TColor } from '@tidy-ui/types';
import { Text } from '../src';
import { TTextTypes } from '../src/types';

const variants = [
  'hero',
  'title1',
  'title2',
  'subtitle1',
  'subtitle2',
  'caption',
  'body1',
  'body2',
  'code',
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];
const colors = ['major', 'minor', 'neutral', 'info', 'success', 'warning', 'danger'];

describe('Text', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quae aut itaque quas reprehenderit provident,
          facilis laudantium facere cum velit dolorum molestiae quisquam distinctio quia illo pariatur placeat natus
          perferendis.
        </Text>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With no children', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Text />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('All types of texts', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <Text is={v as TTextTypes} key={v}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, iusto est pariatur eum fugiat, dolores
            atque corrupti, nemo eos esse libero officiis sint quidem praesentium rem! Dicta laborum ipsum mollitia?
          </Text>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('All color variants of texts', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {colors.map((v) => (
          <Text clr={v as TColor} key={v}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, iusto est pariatur eum fugiat, dolores
            atque corrupti, nemo eos esse libero officiis sint quidem praesentium rem! Dicta laborum ipsum mollitia?
          </Text>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode all color variants of texts', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {colors.map((v) => (
          <Text clr={v as TColor} key={v}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, iusto est pariatur eum fugiat, dolores
            atque corrupti, nemo eos esse libero officiis sint quidem praesentium rem! Dicta laborum ipsum mollitia?
          </Text>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('All other forms of text', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Text is="subtitle2" href="https://google.com">
          Linked: The quick brown fox jumps over the lazy dog
        </Text>
        <Text bld>bold: The quick brown fox jumps over the lazy dog</Text>
        <Text udl>underlined: The quick brown fox jumps over the lazy dog</Text>
        <Text itl>italicized: The quick brown fox jumps over the lazy dog</Text>
        <Text uc>uppercase: The quick brown fox jumps over the lazy dog</Text>
        <Text lc>lowercase: The quick brown fox jumps over the lazy dog</Text>
        <Text cc>capitalized: The quick brown fox jumps over the lazy dog</Text>
        <Text dsb>disabled: The quick brown fox jumps over the lazy dog</Text>
        <Text exd>stretched: The quick brown fox jumps over the lazy dog</Text>
        <Text ctr>centered: The quick brown fox jumps over the lazy dog</Text>
        <div style={{ width: 200 }}>
          <Text tnc>truncated: The quick brown fox jumps over the lazy dog</Text>
        </div>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
