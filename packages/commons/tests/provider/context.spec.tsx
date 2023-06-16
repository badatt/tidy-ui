/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Actions, TidyUiContext, initialState } from '../../src';

describe('TidyUiContext', () => {
  it('Provider', () => {
    const tree = render(
      <TidyUiContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <div>Hello</div>
      </TidyUiContext.Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Consumer', () => {
    const tree = render(
      <TidyUiContext.Consumer>
        {({ state, dispatch }) => (
          <div onClick={() => dispatch({ type: Actions.Root.Reset, payload: null })}>hello {state.pageState.title}</div>
        )}
      </TidyUiContext.Consumer>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Context', () => {
    const hook = renderHook(() => React.useContext(TidyUiContext));
    const { dispatch } = hook.result.current;
    expect(dispatch({ type: Actions.Root.Reset })).toBeNull();
  });
});
