import { Queue } from '@tidy-ui/commons';
import { ToasterActions, ToasterActionTypes } from '../actions';
import { IToast } from '../types';
import { IToasterState } from './types';

const queue = new Queue<IToast>();
const toastSize = {
  current: 0,
  /**
   * Decrements toast size
   */
  decrement() {
    this.current -= 1;
  },
  /**
   * Increments toast size
   */
  increment() {
    this.current += 1;
  },
  /**
   * Resets size
   */
  reset() {
    this.current = 0;
  },
};

/**
 * Initial state
 */
const initialState: IToasterState = {
  toasts: [],
};

/**
 * State initializer
 *
 * @param {IToasterState} initState init state
 * @returns {IToasterState} initial state
 */
const initializer = (initState: IToasterState): IToasterState => {
  return { ...initState };
};

/**
 * Toaster reducer
 *
 * @param {IToasterState} prevState previous toaster state
 * @param {ToasterActionTypes} action toaster actions
 * @returns {IToasterState} mutated toaster state
 */
const reducer = (prevState: IToasterState, action: ToasterActionTypes): IToasterState => {
  switch (action.type) {
    case ToasterActions.AddToast: {
      const toasts = prevState.toasts;
      toasts?.push({ id: Date.now().toString(), item: action.payload?.item });
      toastSize.increment();
      return { ...prevState, toasts };
    }
    case ToasterActions.Clear: {
      toastSize.reset();
      return { ...prevState, toasts: [] };
    }
    case ToasterActions.QueueToast: {
      queue.enqueue({
        id: Date.now.toString(),
        item: action.payload?.item,
      });
      return prevState;
    }
    case ToasterActions.RemoveToast: {
      const isExists = prevState.toasts?.some((t) => t.id === action.payload?.id);
      if (isExists) {
        const toasts = prevState.toasts?.filter((t) => t.id !== action.payload?.id);
        toastSize.decrement();
        return { ...prevState, toasts };
      }
      return prevState;
    }
    default:
      return prevState;
  }
};

export { initializer, initialState, queue, reducer, toastSize };
