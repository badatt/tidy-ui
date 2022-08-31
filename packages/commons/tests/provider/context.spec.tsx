/**
 * @jest-environment jsdom
 */
import React, { useContext, useEffect } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, Actions } from '@tidy-ui/commons';
import { TidyUiContext, initialState } from '../../src';

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
          <div onClick={() => dispatch({ type: Actions.RootActions.Reset, payload: null })}>
            hello {state.pageState.title}
          </div>
        )}
      </TidyUiContext.Consumer>,
    );
    expect(tree).toMatchSnapshot();
  });
});
