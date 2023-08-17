import React from 'react';
import { CardRoot } from './components';
import { ICardProps } from './types';

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, ele, href, ...rest } = props;
  const nodes = ele ? React.cloneElement(ele, {}, children) : children;
  return (
    <CardRoot role="article" ref={ref} href={href} {...rest}>
      {href ? <a href={href}>{nodes}</a> : <>{nodes}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  accentPosition: 'top',
  isSharp: false,
};

Card.displayName = 'Card';

export { Card };
