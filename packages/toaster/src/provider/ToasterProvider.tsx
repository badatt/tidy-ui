import * as React from 'react';
import { initializer, initialState, reducer } from '../reducers';
import { IToasterPRovider } from '../types';
import ToasterContext from './ToasterContext';

/**
 * ToasterProvider
 *
 * @param {IToasterPRovider} props ToasterPRovider props
 * @returns {React.FC<IToasterPRovider>} a component
 */
const ToasterProvider: React.FC<IToasterPRovider> = (props: IToasterPRovider): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState, initializer);

  return <ToasterContext.Provider value={{ dispatch, state }}>{props.children}</ToasterContext.Provider>;
};

export default ToasterProvider;
