import React from 'react';
import { CardMainRoot } from './components';
import { ICardProps } from './types';

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const CardMain = React.forwardRef<HTMLDivElement, Omit<ICardProps, 'ele'>>((props, ref) => {
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

CardMain.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['CardHeader', 'CardBody', 'CardFooter'];
    const errorMessage = `"${componentName}" should take ${allowed} as children`;
    const childrenNames = typeof props[propName].map === 'function' && props[propName].map((c) => c.type.displayName);
    if (!childrenNames || childrenNames.length === 0) {
      return new Error(`Text nodes NOT allowed. ${errorMessage}`);
    }
    if (!childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

CardMain.displayName = 'CardMain';

export { CardMain };
