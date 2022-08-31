import { AppActionTypes, orchidDark, orchidLight, Actions } from '../../src';
import reducer, { IPageState } from '../../src/reducers/page.reducer';

const initialState: IPageState = {
  theme: orchidLight,
  title: 'default title',
};

describe('Page reducer', () => {
  it('Default', () => {
    const action = {
      type: 'default',
      payload: {},
    };
    const mutatedState = reducer(initialState, action as AppActionTypes);
    expect(mutatedState.title).toEqual('default title');
  });
  it('SetTitle', () => {
    const action: AppActionTypes = {
      type: Actions.PageActions.SetTitle,
      payload: { title: 'changed title' },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.title).toEqual('changed title');
  });
  it('SetTheme', () => {
    const action: AppActionTypes = {
      type: Actions.PageActions.SetTheme,
      payload: { theme: orchidDark },
    };
    const mutatedState = reducer(initialState, action);
    expect(mutatedState.theme).toEqual(orchidDark);
  });
});
