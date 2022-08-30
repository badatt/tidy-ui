/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Divider } from '../src';
import { Text } from '@tidy-ui/presentation';
import { TVariant } from '../src/types';

describe('EnhancedDivider', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
        <Divider.Enhanced />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
        <Divider.Enhanced />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tone', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>color major</Text>
        <Divider.Enhanced tone="major" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Density', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>thick density</Text>
        <Divider.Enhanced density="thick" />
        <Text>thin density</Text>
        <Divider.Enhanced density="thin" />
        <Text>medium density</Text>
        <Divider.Enhanced density="medium" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Shade', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>800 shade</Text>
        <Divider.Enhanced shade={800} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const variants = ['dashed', 'dotted', 'double', 'groove', 'hidden', 'ridge', 'solid'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {variants.map((v, i) => (
          <div key={i}>
            <Text>{v} style</Text>
            <Divider.Enhanced variant={v as TVariant} />
            <Text>{v} style</Text>
          </div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Content', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>Content</Text>
        <Divider.Enhanced justify="end">Page 1</Divider.Enhanced>
        <Text>Content</Text>
        <Divider.Enhanced justify="start">Page 1</Divider.Enhanced>
        <Text>Content</Text>
        <Divider.Enhanced justify="center">Page 1</Divider.Enhanced>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
