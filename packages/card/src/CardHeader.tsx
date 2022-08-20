import React, { forwardRef } from 'react';
import { CardHeaderRoot, Icon, Link } from './components';
import { ICardHeaderProps } from './types';

/**
 * CardHeader component, powered by various styles (with theming) and settings
 *
 */
const CardHeader = forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, href, ...rest } = props;
  return (
    <CardHeaderRoot role="heading" ref={ref} {...rest}>
      {children}
      {href && (
        <Link href={href} target="_blank">
          <Icon />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

CardHeader.defaultProps = {
  divided: false,
};

export { CardHeader };
