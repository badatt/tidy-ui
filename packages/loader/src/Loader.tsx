import React from 'react';
import { CircleLoader, EllipsesLoader, LoaderRoot } from './components';
import { ILoaderProps } from './types';

const Loader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  const { ...rest } = props;
  const { variant, girth } = rest;
  return (
    <LoaderRoot ref={ref} role="loader" {...rest}>
      {variant === 'circle' && <CircleLoader {...{ girth }} />}
      {variant === 'ellipses' && <EllipsesLoader {...{ girth }} />}
    </LoaderRoot>
  );
});

Loader.defaultProps = {
  girth: 'md',
  variant: 'circle',
};

Loader.displayName = 'Loader';

export { Loader };
