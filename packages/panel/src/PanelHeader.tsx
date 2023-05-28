import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { ActionIcon, PanelHeaderRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelContext, IPanelHeaderProps } from './types';

const PanelHeader = React.forwardRef<HTMLDivElement, IPanelHeaderProps>((props, ref) => {
  const { children, ele, isToggleVisible, ...rest } = props;
  const { isExpanded, toggle } = React.useContext(PanelContext) as IPanelContext;
  return (
    <PanelHeaderRoot ref={ref} role="heading" onClick={toggle} isExpanded={isExpanded} {...rest}>
      {isToggleVisible && (
        <ActionIcon isExpanded={isExpanded} role="button">
          <Icon.ExpandMore />
        </ActionIcon>
      )}
      {ele ? React.cloneElement(ele, {}, children) : children}
    </PanelHeaderRoot>
  );
});

PanelHeader.displayName = 'PanelHeader';

export { PanelHeader };
