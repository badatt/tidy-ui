import React, { forwardRef } from 'react';
import { PaperRoot } from './components';
import { IPaperProps } from './types';

/**
 * Paper component can be used to represent an elevated section in a page,
 * powered by various styles (with theming) and settings
 *
 */
const Paper = forwardRef<HTMLDivElement, IPaperProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <PaperRoot role="article" ref={ref} {...rest}>
      {children}
    </PaperRoot>
  );
});

Paper.defaultProps = {
  sharp: false,
};

export { Paper };
