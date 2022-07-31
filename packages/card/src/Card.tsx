import React from 'react';
import { CardRoot } from './components';
import { ICardProps } from './types';

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, withHref } = props;
  return (
    <CardRoot ref={ref} {...props}>
      {withHref ? <a href={withHref}>{children}</a> : <>{children}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  isSharp: false,
};

export { Card };
