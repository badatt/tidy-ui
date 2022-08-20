import { PageActionTypes } from './page.actions';
import { RootActionTypes } from './root.actions';

export type AppActionTypes = PageActionTypes | RootActionTypes;

export { PageActions } from './page.actions';
export { RootActions } from './root.actions';
