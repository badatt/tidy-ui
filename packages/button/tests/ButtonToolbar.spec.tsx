/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { ButtonGroup, ButtonToolbar, IconButton } from '../src';

const GroupedButtons = () => (
  <>
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
  </>
);

describe('Render ButtonToolbar', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonToolbar>
          <GroupedButtons />
        </ButtonToolbar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled ButtonToolbar', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonToolbar disabled>
          <GroupedButtons />
        </ButtonToolbar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonToolbar h="5rem" w="25rem">
          <GroupedButtons />
        </ButtonToolbar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
