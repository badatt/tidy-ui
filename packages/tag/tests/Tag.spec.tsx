/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { CheckCircleIcon } from '@tidy-ui/commons';
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
        <Tag isOutlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Tag isOutlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag isDisabled>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tag with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withIcon={<CheckCircleIcon />}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withColor="major">html</Tag>
        <Tag withColor="minor">typescript</Tag>
        <Tag withColor="neutral">cloud</Tag>
        <Tag withColor="success">javascript</Tag>
        <Tag withColor="info">java</Tag>
        <Tag withColor="warning">sass</Tag>
        <Tag withColor="danger">css</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all magnitude variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withSize="sm">html</Tag>
        <Tag>typescript</Tag>
        <Tag withSize="lg">javascript</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
