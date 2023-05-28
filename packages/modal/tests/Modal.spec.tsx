/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Modal } from '../src';

describe('Modal', () => {
  it('Basic render', () => {
    const mockSetOpen = jest.fn();
    const mockSetClose = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <button onClick={mockSetOpen} data-testid="open-btn">
          Submit
        </button>
        <Modal isOpen={true}>
          <div onClick={mockSetClose} data-testid="inner-element">
            Successfully submitted !
          </div>
        </Modal>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const openBtn = tree.getByTestId('open-btn');
    fireEvent.click(openBtn);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    const innerElement = tree.getByTestId('inner-element');
    fireEvent.click(innerElement);
    expect(mockSetClose).toHaveBeenCalledTimes(1);
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <button data-testid="open-btn">Submit</button>
        <Modal isOpen={false}>
          <div>Successfully submitted !</div>
        </Modal>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('On backdrop click', () => {
    const mockSetOpen = jest.fn();
    const mockSetClose = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <button onClick={mockSetOpen} data-testid="open-btn">
          Submit
        </button>
        <Modal isOpen onBackdropClick={mockSetClose}>
          <div>Successfully submitted !</div>
        </Modal>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const openBtn = tree.getByTestId('open-btn');
    fireEvent.click(openBtn);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    const outerElement = tree.getByRole('navigation');
    fireEvent.click(outerElement);
    expect(mockSetClose).toHaveBeenCalledTimes(1);
  });

  it('On backdrop click empty', () => {
    const mockSetOpen = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <button onClick={mockSetOpen} data-testid="open-btn">
          Submit
        </button>
        <Modal isOpen data-testid="outer-element">
          <div>Successfully submitted !</div>
        </Modal>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const openBtn = tree.getByTestId('open-btn');
    fireEvent.click(openBtn);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    const outerElement = tree.getByRole('navigation');
    fireEvent.click(outerElement);
  });
});
