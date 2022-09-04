import React from 'react';
import { PaperRoot } from './components';
import { IPaperProps } from './types';

/**
 * Paper component can be used to represent an elevated section in a page,
 * powered by various styles (with theming) and settings
 *
 */
const Paper = React.forwardRef<HTMLDivElement, IPaperProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <PaperRoot role="article" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </PaperRoot>
  );
});

Paper.defaultProps = {
  sharp: false,
};

Paper.displayName = 'Paper';

export { Paper };
