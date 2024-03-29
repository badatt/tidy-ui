import React from 'react';
import { CircleLoader, EllipsesLoader, LoaderRoot, PulseLoader } from './components';
import { ILoaderProps } from './types';

const Loader = React.forwardRef<HTMLDivElement, Omit<ILoaderProps, 'children'>>((props, ref) => {
  const { ...rest } = props;
  const { variant, girth } = rest;
  return (
    <LoaderRoot ref={ref} role="loader" {...rest}>
      {variant === 'circle' && <CircleLoader {...{ girth }} />}
      {variant === 'ellipses' && <EllipsesLoader {...{ girth }} />}
      {variant == 'pulse' && <PulseLoader {...{ girth }} />}
    </LoaderRoot>
  );
});

Loader.defaultProps = {
  girth: 'md',
  variant: 'circle',
};

Loader.displayName = 'Loader';

export { Loader };
