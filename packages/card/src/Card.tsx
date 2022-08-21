import React, { forwardRef } from 'react';
import { CardRoot } from './components';
import { ICardProps } from './types';

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, href, ...rest } = props;
  return (
    <CardRoot role="article" ref={ref} href={href} {...rest}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  accentPosition: 'top',
  sharp: false,
};

export { Card };
