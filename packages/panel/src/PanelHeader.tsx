import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { ActionIcon, PanelHeaderRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelContext, IPanelHeaderProps } from './types';

const PanelHeader = React.forwardRef<HTMLDivElement, IPanelHeaderProps>((props, ref) => {
  const { children, className, ele, ...rest } = props;
  const { expanded, toggle } = React.useContext(PanelContext) as IPanelContext;
  return (
    <PanelHeaderRoot className={className} ref={ref} role="heading" {...rest} onClick={toggle}>
      {ele ? React.cloneElement(ele, {}, children) : children}
      <ActionIcon ele={<Icon.ExpandMore />} expanded={expanded} />
    </PanelHeaderRoot>
  );
});

export { PanelHeader };
