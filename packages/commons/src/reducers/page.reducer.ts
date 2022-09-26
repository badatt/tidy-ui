import { AppActionTypes } from '../actions';
import { PageActions } from '../actions/page.actions';
import { ITidyUITheme } from '../theme/types';

/**
 * Page state props
 */
export interface IPageState {
  /**
   * Theme of the application
   */
  theme?: ITidyUITheme;

  /**
   * Title of the page
   */
  title?: string;
}

/**
 * Page reducer
 *
 * @param {IPageState} prevState previous page state
 * @param {AppActionTypes} action page actions
 * @returns {IPageState} mutated page state
 */
const reducer = (prevState: IPageState, action: AppActionTypes): IPageState => {
  switch (action.type) {
    case PageActions.SetTitle:
      return { ...prevState, title: action.payload?.title };
    case PageActions.SetTheme:
      return { ...prevState, theme: action.payload?.theme };
    default:
      return prevState;
  }
};

export default reducer;
