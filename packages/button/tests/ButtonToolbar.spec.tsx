/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidLight } from '@tidy-ui/commons';
import { ButtonGroup, ButtonToolbar, IconButton } from '../src';

describe('Render ButtonToolbar', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonToolbar>
          <IconButton icon={<Icon.AddCircle />}>Add</IconButton>
          <ButtonGroup>
            <IconButton icon={<Icon.Add />} />
            <IconButton icon={<Icon.CheckCircle />} />
            <IconButton icon={<Icon.Info />} />
            <IconButton icon={<Icon.Warning />} />
            <IconButton icon={<Icon.Dangerous />} />
            <IconButton icon={<Icon.Cancel />} />
          </ButtonGroup>
          <IconButton icon={<Icon.Close />} placement="right">
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
          <IconButton icon={<Icon.AddCircle />} variant="outlined">
            Add
          </IconButton>
          <ButtonGroup>
            <IconButton icon={<Icon.Add />} variant="outlined" />
            <IconButton icon={<Icon.CheckCircle />} variant="outlined" />
            <IconButton icon={<Icon.Info />} variant="outlined" />
            <IconButton icon={<Icon.Warning />} variant="outlined" />
            <IconButton icon={<Icon.Dangerous />} variant="outlined" />
            <IconButton icon={<Icon.Close />} variant="outlined" />
          </ButtonGroup>
          <IconButton icon={<Icon.Cancel />} variant="outlined" />
        </ButtonToolbar>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
