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
    <CardFooterRoot role="presentation" ref={ref} {...rest}>
      {children}
    </CardFooterRoot>
  );
});

CardFooter.defaultProps = {
  divided: false,
};

export { CardFooter };
