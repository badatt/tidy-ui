import React, { forwardRef } from 'react';
import { PaperRoot } from './components';
import { IPaperProps } from './types';

/**
 * Paper component can be used to represent an elevated section in a page,
 * powered by various styles (with theming) and settings
 *
 */
const Paper = forwardRef<HTMLDivElement, IPaperProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <PaperRoot role="paper" ref={ref} {...rest} className={className}>
      {children}
    </PaperRoot>
  );
});

Paper.defaultProps = {
  isSharp: false,
};

export { Paper };
