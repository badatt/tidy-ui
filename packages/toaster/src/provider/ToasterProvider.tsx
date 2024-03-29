import * as React from 'react';
import { IBaseProps } from '@tidy-ui/types';
import { initializer, initialState, reducer } from '../reducers';
import ToasterContext from './ToasterContext';

/**
 * ToasterProvider
 *
 * @param {IBaseProps} props ToasterPRovider props
 * @returns {JSX.Element} a component
 */
const ToasterProvider: React.FC<React.PropsWithChildren<IBaseProps>> = (
  props: React.PropsWithChildren<IBaseProps>,
): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState, initializer);

  const toastedContextValue = React.useMemo(() => ({ dispatch, state }), [dispatch, state]);

  return <ToasterContext.Provider value={toastedContextValue}>{props.children}</ToasterContext.Provider>;
};

export default ToasterProvider;
