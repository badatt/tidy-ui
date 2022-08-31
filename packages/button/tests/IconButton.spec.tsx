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
import { IconButton } from '../src';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled IconButton', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />} disabled>
          Disabled
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />} tone="major">
          Major
        </IconButton>
        <IconButton icon={<Icon.Cancel />} tone="minor">
          Minor
        </IconButton>
        <IconButton icon={<Icon.Close />} tone="neutral">
          Neutral
        </IconButton>
        <IconButton icon={<Icon.Info />} tone="info">
          Info
        </IconButton>
        <IconButton icon={<Icon.CheckCircle />} tone="success">
          Success
        </IconButton>
        <IconButton icon={<Icon.Warning />} tone="warning">
          Warning
        </IconButton>
        <IconButton icon={<Icon.Dangerous />} tone="danger">
          Danger
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />} size="xxs">
          Xxs
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="xs">
          Xs
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="sm">
          Sm
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="md">
          Md
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="lg">
          Lg
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="xl">
          Xl
        </IconButton>
        <IconButton icon={<Icon.AddCircle />} size="xxl">
          Xxl
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />} variant="primary">
          Primary
        </IconButton>
        <IconButton icon={<Icon.Close />} variant="outlined">
          Outlined
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with only icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />} iconOnly size="xxs" />
        <IconButton icon={<Icon.Add />} iconOnly size="xs" />
        <IconButton icon={<Icon.Add />} iconOnly size="sm" />
        <IconButton icon={<Icon.Add />} iconOnly size="md" />
        <IconButton icon={<Icon.Add />} iconOnly size="lg" />
        <IconButton icon={<Icon.Add />} iconOnly size="xl" />
        <IconButton icon={<Icon.Add />} iconOnly size="xxl" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with placement variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
        <IconButton icon={<Icon.AddCircle />} placement="right">
          Right
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
