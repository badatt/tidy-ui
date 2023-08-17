import React from 'react';
import { DividerRoot } from './components';
import { IDividerProps } from './types';

const Divider = React.forwardRef<HTMLHRElement, Omit<IDividerProps, 'children'>>((props, ref) => {
  const { className, ...rest } = props;
  return <DividerRoot ref={ref} className={className} role="separator" {...rest} />;
});

Divider.defaultProps = {
  density: 'thin',
  isVertical: false,
  margin: '0.5rem',
  tone: 'neutral',
  variant: 'solid',
};

Divider.displayName = 'Divider';

export { Divider };
