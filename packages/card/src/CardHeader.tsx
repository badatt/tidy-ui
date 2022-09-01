import React from 'react';
import { CardHeaderRoot, LaunchIcon, Link } from './components';
import { ICardHeaderProps } from './types';

/**
 * CardHeader component, powered by various styles (with theming) and settings
 *
 */
const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, href, ...rest } = props;
  return (
    <CardHeaderRoot role="heading" ref={ref} {...rest}>
      {children}
      {href && (
        <Link href={href} target="_blank">
          <LaunchIcon />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

CardHeader.defaultProps = {
  divided: false,
};

export { CardHeader };
