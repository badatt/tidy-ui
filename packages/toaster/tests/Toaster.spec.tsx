/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, getByText, render, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import { orchidDark, orchidLight, TidyUiProvider, styled } from '../../commons/src';
import { Toaster, useToaster } from '../src';
import ToasterContext from '../src/provider/ToasterContext';
import { initializer, queue, reducer } from '../src/reducers';
import { ToasterContainer } from '../src/ToasterContainer';
import { ToasterActions } from '../src/actions';

const TestToast = styled.div<{ onClose: any }>``;

export const Component = () => {
  const { toaster } = useToaster();
  const handleClose = jest.fn();
  const ele = (
    <TestToast onClose={handleClose}>
      <button data-test-id="toast1" onClick={handleClose}></button>
      {Date.now()}
    </TestToast>
  );

  return (
    <div onClick={jest.fn()}>
      <button onClick={() => toaster.push(ele)}>Add</button>
      <button onClick={() => toaster.clear()}>Clear</button>
    </div>
  );
};

describe('Toaster', () => {
  it('Basic render', () => {
    const tree = render(<TidyUiProvider theme={orchidLight} toaster={<Toaster />}></TidyUiProvider>);
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(<TidyUiProvider theme={orchidDark} toaster={<Toaster />}></TidyUiProvider>);
    expect(tree).toMatchSnapshot();
  });

  it('Toaster with some toasts', () => {
    const initialState = initializer({
      toasts: [{ id: '1', item: <div>hello</div> }],
    });
    const Component = () => {
      const [state, dispatch] = React.useReducer(reducer, initialState, initializer);
      return (
        <ToasterContext.Provider value={{ state, dispatch }}>
          <ToasterContainer />
        </ToasterContext.Provider>
      );
    };
    const tree = render(<Component />);
    expect(tree).toMatchSnapshot();
  });

  it('Toast items in queue', () => {
    queue.enqueue({
      id: '1',
      item: <div>hello</div>,
    });
    const initialState = initializer({
      toasts: [],
    });
    const Component = () => {
      const [state, dispatch] = React.useReducer(reducer, initialState, initializer);
      return (
        <ToasterContext.Provider value={{ state, dispatch }}>
          <ToasterContainer />
        </ToasterContext.Provider>
      );
    };
    const tree = render(<Component />);
    expect(tree).toMatchSnapshot();
  });

  it('Push toast', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight} toaster={<Toaster />}>
        <Component />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const addButton = getByText(tree.container, 'Add');
    act(() => {
      fireEvent.click(addButton);
    });
    setTimeout(() => {}, 100);
  });
  it('Clear all toasts', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight} toaster={<Toaster />}>
        <Component />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const clearButton = getByText(tree.container, 'Clear');
    act(() => {
      fireEvent.click(clearButton);
    });
    setTimeout(() => {}, 100);
  });

  it('Context', () => {
    const hook = renderHook(() => React.useContext(ToasterContext));
    const { dispatch } = hook.result.current;
    expect(dispatch({ type: ToasterActions.Clear })).toBeNull();
  });
});
