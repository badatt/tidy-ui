/**
 * @jest-environment jsdom
 */
import React, { useContext, useEffect } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TidyUiContext, TidyUiProvider, orchidLight, Actions } from '../../src';

describe('TidyUiProvider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div>Hello</div>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dispatch', () => {
    const Component = ({ children }) => {
      const { state, dispatch } = useContext(TidyUiContext);
      useEffect(() => {
        dispatch({
          type: Actions.RootActions.SetVersion,
          payload: { version: '1.0.0' },
        });
      }, []);
      return (
        <div>
          {children} {state.rootState.version}
        </div>
      );
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Component>Hello</Component>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
