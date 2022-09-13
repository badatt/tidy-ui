export { ActionMap } from './types';

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
  Page: PageActions,
  Root: RootActions,
};

export { Actions };
