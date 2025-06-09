/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Menu, MenuItem, MenuItemSeparator } from '../src';

describe('Menu', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Menu trigger={<div data-testid="menu-btn">Menu</div>}>
          <MenuItem icon={<i>icon</i>}>Home</MenuItem>
          <MenuItemSeparator />
          <MenuItem>Logout</MenuItem>
        </Menu>
      </TidyUiProvider>,
    );
    const trigger = tree.getByTestId('menu-btn');
    fireEvent.click(trigger);
    fireEvent.click(tree.container);
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Menu trigger={<div data-testid="menu-btn">Menu</div>}>
          <MenuItem icon={<i>icon</i>}>Home</MenuItem>
          <MenuItemSeparator />
          <MenuItem>Logout</MenuItem>
        </Menu>
      </TidyUiProvider>,
    );
    const trigger = tree.getByTestId('menu-btn');
    fireEvent.click(trigger);
    fireEvent.click(tree.container);
    expect(tree).toMatchSnapshot();
  });
});
