import React, { createContext, FC, ReactNode, useCallback, useState } from 'react';
import { IPanelContext, IPanelProps } from './types';

const PanelContext = createContext<IPanelContext | null>(null);

/**
 * PanelContextProvided to share state across all panel related components
 *
 * @param {IPanelProps} props Panel props
 * @returns {FC<ReactNode>} react node
 */
const PanelContextProvider: FC<ReactNode> = (props: IPanelProps) => {
  const { children } = props;
  const [isExpanded, setIsExpanded] = useState(props.isExpanded);

  const toggle = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return <PanelContext.Provider value={{ isExpanded, toggle }}>{children}</PanelContext.Provider>;
};

export { PanelContext, PanelContextProvider };
