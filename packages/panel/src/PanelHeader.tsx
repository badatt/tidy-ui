import React, { forwardRef, useContext } from 'react';
import { ExpandMoreIcon } from '@tidy-ui/commons';
import { Icon, PanelHeaderRoot } from './components';
import { PanelContext } from './PanelContextProvider';
import { IPanelContext, IPanelHeaderProps } from './types';

const PanelHeader = forwardRef<HTMLDivElement, IPanelHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { expanded, toggle } = useContext(PanelContext) as IPanelContext;
  return (
    <PanelHeaderRoot className={className} ref={ref} role="heading" {...rest} onClick={toggle}>
      {children}
      <Icon role="button" expanded={expanded}>
        <ExpandMoreIcon />
      </Icon>
    </PanelHeaderRoot>
  );
});

export { PanelHeader };
