import React, { forwardRef, useContext } from 'react';
import { Icon } from '@tidy-ui/commons';
import { ActionIcon, PanelHeaderRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelContext, IPanelHeaderProps } from './types';

const PanelHeader = forwardRef<HTMLDivElement, IPanelHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { expanded, toggle } = useContext(PanelContext) as IPanelContext;
  return (
    <PanelHeaderRoot className={className} ref={ref} role="heading" {...rest} onClick={toggle}>
      {children}
      <Icon
        role="button"
        ele={<ActionIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
        h="1.5em"
        w="1.5em"
      />
    </PanelHeaderRoot>
  );
});

export { PanelHeader };
