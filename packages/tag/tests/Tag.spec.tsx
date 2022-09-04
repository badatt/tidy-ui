/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Tag } from '../src';
import { Tone } from '@tidy-ui/types';

describe('Tag', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag onClose={jest.fn()}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag outlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Tag outlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag disabled>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tag with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag icon={<Icon.CheckCircle />}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Tag tone={Tone[v]}>{Tone[v]}</Tag>
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all magnitude variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag size="sm">html</Tag>
        <Tag>typescript</Tag>
        <Tag size="lg">javascript</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
