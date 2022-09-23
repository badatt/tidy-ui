import React from 'react';
import { TooltipRoot } from './components';
import { ITooltipProps } from './types';

/**
 * Tooltip can be used to represent rich tooltips for your components in a page.
 * It comes with settings like direction, theming etc.
 */
const Tooltip = React.forwardRef<HTMLDivElement, ITooltipProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <TooltipRoot ref={ref} role="tooltip" {...rest}>
      {children}
    </TooltipRoot>
  );
});

Tooltip.defaultProps = {
  direction: 'bottom',
};

export { Tooltip };
