import React from 'react';
import { CardHeaderRoot, LaunchIcon, Link } from './components';
import { ICardHeaderProps } from './types';

const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, ele, href, ...rest } = props;
  return (
    <CardHeaderRoot role="heading" ref={ref} {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
      {href && (
        <Link href={href} target="_blank">
          <LaunchIcon />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

CardHeader.defaultProps = {
  isDivided: false,
};

CardHeader.displayName = 'CardHeader';

export { CardHeader };
