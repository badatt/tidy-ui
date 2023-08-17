import React from 'react';
import { CardFooterRoot } from './components';
import { ICardFooterProps } from './types';

const CardFooter = React.forwardRef<HTMLDivElement, ICardFooterProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <CardFooterRoot role="presentation" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </CardFooterRoot>
  );
});

CardFooter.defaultProps = {
  isDivided: false,
};

CardFooter.displayName = 'CardFooter';

export { CardFooter };
