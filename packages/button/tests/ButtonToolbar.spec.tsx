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
          <IconButton icon={<AddCircleIcon />}>Add</IconButton>
          <ButtonGroup>
            <IconButton icon={<AddIcon />} />
            <IconButton icon={<CheckCircleIcon />} />
            <IconButton icon={<InfoIcon />} />
            <IconButton icon={<WarningIcon />} />
            <IconButton icon={<DangerousIcon />} />
            <IconButton icon={<CancelIcon />} />
          </ButtonGroup>
          <IconButton icon={<CloseIcon />} placement="right">
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
        <ButtonToolbar disabled>
          <IconButton icon={<AddCircleIcon />} variant="outlined">
            Add
          </IconButton>
          <ButtonGroup>
            <IconButton icon={<AddIcon />} variant="outlined" />
            <IconButton icon={<CheckCircleIcon />} variant="outlined" />
            <IconButton icon={<InfoIcon />} variant="outlined" />
            <IconButton icon={<WarningIcon />} variant="outlined" />
            <IconButton icon={<DangerousIcon />} variant="outlined" />
            <IconButton icon={<CloseIcon />} variant="outlined" />
          </ButtonGroup>
          <IconButton icon={<CancelIcon />} variant="outlined" />
        </ButtonToolbar>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
