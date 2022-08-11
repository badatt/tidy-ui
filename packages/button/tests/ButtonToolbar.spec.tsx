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
import { orchidLight } from '@tidy-ui/commons';
import { ButtonGroup, ButtonToolbar, IconButton } from '../src';

describe('Render ButtonToolbar', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonToolbar>
          <IconButton withIcon={<AddCircleIcon />}>Add</IconButton>
          <ButtonGroup>
            <IconButton withIcon={<AddIcon />} />
            <IconButton withIcon={<CheckCircleIcon />} />
            <IconButton withIcon={<InfoIcon />} />
            <IconButton withIcon={<WarningIcon />} />
            <IconButton withIcon={<DangerousIcon />} />
            <IconButton withIcon={<CancelIcon />} />
          </ButtonGroup>
          <IconButton withIcon={<CloseIcon />} withPlacement="right">
            Delete
          </IconButton>
        </ButtonToolbar>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled ButtonToolbar', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonToolbar isDisabled>
          <IconButton withIcon={<AddCircleIcon />} withType="outlined">
            Add
          </IconButton>
          <ButtonGroup>
            <IconButton withIcon={<AddIcon />} withType="outlined" />
            <IconButton withIcon={<CheckCircleIcon />} withType="outlined" />
            <IconButton withIcon={<InfoIcon />} withType="outlined" />
            <IconButton withIcon={<WarningIcon />} withType="outlined" />
            <IconButton withIcon={<DangerousIcon />} withType="outlined" />
            <IconButton withIcon={<CloseIcon />} withType="outlined" />
          </ButtonGroup>
          <IconButton withIcon={<CancelIcon />} withType="outlined" />
        </ButtonToolbar>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
