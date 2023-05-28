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
  const [isExpanded, setIsExpanded] = React.useState(props.isExpanded);

  const toggle = React.useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const panelContextValue = React.useMemo(() => ({ isExpanded, toggle }), [isExpanded, toggle]);

  return <PanelContext.Provider value={panelContextValue}>{children}</PanelContext.Provider>;
};

export { PanelContext, PanelContextProvider };
