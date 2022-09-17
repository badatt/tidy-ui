/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { ButtonGroup, ButtonCluster, IconButton, Button } from '../src';

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

describe('Render ButtonCluster', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonCluster>
          <GroupedButtons />
        </ButtonCluster>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled ButtonCluster', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonCluster disabled>
          <GroupedButtons />
        </ButtonCluster>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretched ButtonCluster', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonCluster stretched>
          <GroupedButtons />
        </ButtonCluster>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonCluster h="5rem" w="25rem">
          <GroupedButtons />
        </ButtonCluster>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
