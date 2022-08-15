import React, { forwardRef } from 'react';
import { CardRoot } from './components';
import { ICardProps } from './types';

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, className, withHref, ...rest } = props;
  return (
    <CardRoot className={className} role="card" ref={ref} withHref={withHref} {...rest}>
      {withHref ? <a href={withHref}>{children}</a> : <>{children}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  isSharp: false,
};

export { Card };
