import { AppActionTypes, Actions } from '../../src';
import reducer from '../../src/reducers/root.reducer';
import { IRootState } from '../../src/reducers/root.reducer';

const initialState: IRootState = {
  version: '1.0.0',
};

describe('Page reducer', () => {
  it('Default', () => {
    const action = {
      type: 'default',
      payload: {},
    };
    const mutatedState = reducer(initialState, action as AppActionTypes);
    expect(mutatedState.version).toEqual(initialState.version);
  });
  it('SetVersion', () => {
    const action: AppActionTypes = {
      type: Actions.Root.SetVersion,
      payload: { version: '2.0.0' },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.version).toEqual('2.0.0');
  });
  it('SetVersion empty payload', () => {
    const action: AppActionTypes = {
      type: Actions.Root.SetVersion,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.version).toEqual(undefined);
  });
  it('Reset', () => {
    const action: AppActionTypes = {
      type: Actions.Root.Reset,
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.version).toEqual('');
  });
});
