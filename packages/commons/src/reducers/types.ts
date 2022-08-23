import { IPageState } from './page.reducer';
import { IRootState } from './root.reducer';

/**
 * State props
 */
export interface IState {
  /**
   * Page state
   */
  pageState: IPageState;

  /**
   * Root state
   */
  rootState: IRootState;
}
