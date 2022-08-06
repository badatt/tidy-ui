import React, { forwardRef, useContext } from 'react';
import { ExpandMoreIcon } from '@tidy-ui/commons';
import { Icon, PanelHeaderRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelContext, IPanelHeaderProps } from './types';

const PanelHeader = forwardRef<HTMLDivElement, IPanelHeaderProps>((props, ref) => {
  const { children, ...rest } = props;
  const { isExpanded, toggle } = useContext(PanelContext) as IPanelContext;
  return (
    <PanelHeaderRoot ref={ref} role="panel-header" {...rest} onClick={toggle}>
      {children}
      <Icon role="panel-icon" isExpanded={isExpanded}>
        <ExpandMoreIcon />
      </Icon>
    </PanelHeaderRoot>
  );
});

export { PanelHeader };
