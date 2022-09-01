import React from 'react';
import { IPanelContext, IPanelProps } from './types';

const PanelContext = React.createContext<IPanelContext | null>(null);

/**
 * PanelContextProvided to share state across all panel related components
 *
 * @param {IPanelProps} props Panel props
 * @returns {JSX.Element} react node
 */
const PanelContextProvider = (props: IPanelProps): JSX.Element => {
  const { children } = props;
  const [expanded, setExpanded] = React.useState(props.expanded);

  const toggle = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return <PanelContext.Provider value={{ expanded, toggle }}>{children}</PanelContext.Provider>;
};

export { PanelContext, PanelContextProvider };
