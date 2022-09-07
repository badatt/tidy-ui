import { PageActions, PageActionTypes } from './page.actions';
import { RootActions, RootActionTypes } from './root.actions';
import { ToasterActions, ToasterActionTypes } from './toaster.actions';

/**
 * Tidy UI components internal actions
 */
export type AppActionTypes = PageActionTypes | RootActionTypes | ToasterActionTypes;

/**
 * Tidy UI context actions
 */
const Actions = {
  Page: PageActions,
  Root: RootActions,
  Toaster: ToasterActions,
};

export { Actions };
