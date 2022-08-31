import { PageActions, PageActionTypes } from './page.actions';
import { RootActions, RootActionTypes } from './root.actions';

/**
 * Tidy UI components internal actions
 */
export type AppActionTypes = PageActionTypes | RootActionTypes;

/**
 * Tidy UI context actions
 */
const Actions = {
  PageActions,
  RootActions,
};

export { Actions };
