import React from 'react';

import { Size, Status } from '@tidy-ui/types';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  status?: Status;
}

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div ref={ref} {...rest} className={className}>
      {children}
    </div>
  );
});

export { Card };
