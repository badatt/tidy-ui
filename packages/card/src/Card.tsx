import React from 'react';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardRoot } from './components';
import { ICardProps } from './types';

/** @internal */
interface CardComponent extends React.ForwardRefExoticComponent<ICardProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Body: typeof CardBody;
  /** @internal */
  Footer: typeof CardFooter;
  /** @internal */
  Header: typeof CardHeader;
}

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, ele, href, ...rest } = props;
  const nodes = ele ? React.cloneElement(ele, {}, children) : children;
  return (
    <CardRoot role="article" ref={ref} href={href} {...rest}>
      {href ? <a href={href}>{nodes}</a> : <>{nodes}</>}
    </CardRoot>
  );
}) as CardComponent;

Card.defaultProps = {
  accentPosition: 'top',
  isSharp: false,
};

Card.displayName = 'Card';

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export { Card };
