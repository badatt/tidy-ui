/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {
  AddCircleIcon,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  CloseIcon,
  DangerousIcon,
  InfoIcon,
  WarningIcon,
} from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { IconButton } from '../src';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddIcon />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <IconButton icon={<AddIcon />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled IconButton', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddIcon />} disabled>
          Disabled
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddCircleIcon />} tone="major">
          Major
        </IconButton>
        <IconButton icon={<CancelIcon />} tone="minor">
          Minor
        </IconButton>
        <IconButton icon={<CloseIcon />} tone="neutral">
          Neutral
        </IconButton>
        <IconButton icon={<InfoIcon />} tone="info">
          Info
        </IconButton>
        <IconButton icon={<CheckCircleIcon />} tone="success">
          Success
        </IconButton>
        <IconButton icon={<WarningIcon />} tone="warning">
          Warning
        </IconButton>
        <IconButton icon={<DangerousIcon />} tone="danger">
          Danger
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddCircleIcon />} size="xxs">
          Xxs
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="xs">
          Xs
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="sm">
          Sm
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="md">
          Md
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="lg">
          Lg
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="xl">
          Xl
        </IconButton>
        <IconButton icon={<AddCircleIcon />} size="xxl">
          Xxl
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddCircleIcon />} variant="primary">
          Primary
        </IconButton>
        <IconButton icon={<CloseIcon />} variant="outlined">
          Outlined
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with only icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddIcon />} iconOnly size="xxs" />
        <IconButton icon={<AddIcon />} iconOnly size="xs" />
        <IconButton icon={<AddIcon />} iconOnly size="sm" />
        <IconButton icon={<AddIcon />} iconOnly size="md" />
        <IconButton icon={<AddIcon />} iconOnly size="lg" />
        <IconButton icon={<AddIcon />} iconOnly size="xl" />
        <IconButton icon={<AddIcon />} iconOnly size="xxl" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with placement variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<AddCircleIcon />}>Left</IconButton>
        <IconButton icon={<AddCircleIcon />} placement="right">
          Right
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
