import React, { forwardRef } from 'react';
import { CardFooterRoot } from './components';
import { ICardFooterProps } from './types';

/**
 * CardFooter component, powered by various styles (with theming) and settings
 *
 */
const CardFooter = forwardRef<HTMLDivElement, ICardFooterProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <CardFooterRoot ref={ref} {...rest}>
      {children}
    </CardFooterRoot>
  );
});

CardFooter.defaultProps = {
  isDivided: false,
};

export { CardFooter };
