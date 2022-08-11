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
        <IconButton withIcon={<AddIcon />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <IconButton withIcon={<AddIcon />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled IconButton', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddIcon />} isDisabled>
          Disabled
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddCircleIcon />} withColor="major">
          Major
        </IconButton>
        <IconButton withIcon={<CancelIcon />} withColor="minor">
          Minor
        </IconButton>
        <IconButton withIcon={<CloseIcon />} withColor="neutral">
          Neutral
        </IconButton>
        <IconButton withIcon={<InfoIcon />} withColor="info">
          Info
        </IconButton>
        <IconButton withIcon={<CheckCircleIcon />} withColor="success">
          Success
        </IconButton>
        <IconButton withIcon={<WarningIcon />} withColor="warning">
          Warning
        </IconButton>
        <IconButton withIcon={<DangerousIcon />} withColor="danger">
          Danger
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddCircleIcon />} withSize="xxs">
          Xxs
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="xs">
          Xs
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="sm">
          Sm
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="md">
          Md
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="lg">
          Lg
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="xl">
          Xl
        </IconButton>
        <IconButton withIcon={<AddCircleIcon />} withSize="xxl">
          Xxl
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddCircleIcon />} withType="primary">
          Primary
        </IconButton>
        <IconButton withIcon={<CloseIcon />} withType="outlined">
          Outlined
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with only icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="xxs" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="xs" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="sm" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="md" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="lg" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="xl" />
        <IconButton withIcon={<AddIcon />} isIconOnly withSize="xxl" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with placement variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton withIcon={<AddCircleIcon />}>Left</IconButton>
        <IconButton withIcon={<AddCircleIcon />} withPlacement="right">
          Right
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
