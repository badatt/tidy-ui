import React from 'react';
import { ProgressBar, ProgressRoot } from './components';
import { IProgressProps } from './types';

const Progress = React.forwardRef<HTMLDivElement, Omit<IProgressProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  const { tone, value, variant } = props;
  return (
    <ProgressRoot ref={ref} role="progressbar" {...rest}>
      <ProgressBar {...{ tone, value, variant }} />
    </ProgressRoot>
  );
});

Progress.defaultProps = {
  girth: 'md',
  tone: 'info',
  variant: 'solid',
};

Progress.displayName = 'Progress';

export { Progress };
