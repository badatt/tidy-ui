import React, { forwardRef } from 'react';
import { CardHeaderRoot, Icon, Link } from './components';
import { ICardHeaderProps } from './types';

/**
 * CardHeader component, powered by various styles (with theming) and settings
 *
 */
const CardHeader = forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, withHref, ...rest } = props;
  return (
    <CardHeaderRoot ref={ref} {...rest}>
      {children}
      {withHref && (
        <Link href={withHref} target="_blank">
          <Icon {...rest} />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

CardHeader.defaultProps = {
  isDivided: false,
};

export { CardHeader };
