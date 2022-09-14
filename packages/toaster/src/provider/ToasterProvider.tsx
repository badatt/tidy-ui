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
const ToasterProvider: React.FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState, initializer);

  return <ToasterContext.Provider value={{ dispatch, state }}>{props.children}</ToasterContext.Provider>;
};

export default ToasterProvider;
