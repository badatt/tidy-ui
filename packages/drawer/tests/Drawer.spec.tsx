/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Drawer } from '../src';

describe('Drawer', () => {
  it('Basic render', () => {
    const mockSetOpen = jest.fn();
    const mockSetClose = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div onClick={mockSetOpen} data-testid="open-btn">
          Open
        </div>
        <Drawer isOpen onClose={mockSetClose}>
          menu
        </Drawer>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const openBtn = tree.getByTestId('open-btn');
    fireEvent.click(openBtn);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    const closeBtn = tree.getByRole('button');
    fireEvent.click(closeBtn);
    expect(mockSetClose).toHaveBeenCalledTimes(1);
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <button data-testid="open-btn">Open</button>
        <Drawer isOpen>menu</Drawer>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Drawer on right', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <button data-testid="open-btn">Open</button>
        <Drawer isOpen anchor="right">
          menu
        </Drawer>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Drawer is in closed state', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <button data-testid="open-btn">Open</button>
        <Drawer isOpen={false}>menu</Drawer>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('No close handler', () => {
    const mockSetOpen = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div onClick={mockSetOpen} data-testid="open-btn">
          Open
        </div>
        <Drawer isOpen={true}>menu</Drawer>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const openBtn = tree.getByTestId('open-btn');
    fireEvent.click(openBtn);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    const closeBtn = tree.getByRole('button');
    fireEvent.click(closeBtn);
  });
});
