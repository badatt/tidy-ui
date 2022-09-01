import React from 'react';
import { CardMainRoot } from './components';
import { ICardProps } from './types';

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const CardMain = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, href, ...rest } = props;
  return (
    <CardMainRoot role="article" ref={ref} href={href} {...rest}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </CardMainRoot>
  );
});

CardMain.defaultProps = {
  accentPosition: 'top',
  sharp: false,
};

CardMain.displayName = 'CardMain';

export { CardMain };
