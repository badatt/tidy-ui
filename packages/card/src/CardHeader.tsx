import React, { forwardRef } from 'react';
import { CardHeaderRoot, Icon, Link } from './components';
import { ICardHeaderProps } from './types';

/**
 * CardHeader component, powered by various styles (with theming) and settings
 *
 */
const CardHeader = forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, className, withHref, isDivided, ...rest } = props;
  return (
    <CardHeaderRoot className={className} role="card-header" ref={ref} isDivided={isDivided} {...rest}>
      {children}
      {withHref && (
        <Link href={withHref} target="_blank">
          <Icon />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

CardHeader.defaultProps = {
  isDivided: false,
};

export { CardHeader };
