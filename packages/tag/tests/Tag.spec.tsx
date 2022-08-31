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
        <Tag tone="major">html</Tag>
        <Tag tone="minor">typescript</Tag>
        <Tag tone="neutral">cloud</Tag>
        <Tag tone="success">javascript</Tag>
        <Tag tone="info">java</Tag>
        <Tag tone="warning">sass</Tag>
        <Tag tone="danger">css</Tag>
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
