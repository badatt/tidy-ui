import React from 'react';
import { FrameRoot } from './components';
import { IFrameProps } from './types';

const Frame = React.forwardRef<HTMLDivElement, IFrameProps>((props, ref) => {
  const { children, ...rest } = props;
  const { isLoaded, isWrapped } = rest;

  return (
    <>
      {isLoaded ? (
        <>
          {isWrapped ? (
            <FrameRoot ref={ref} role="frame" {...rest}>
              {children}
            </FrameRoot>
          ) : (
            children
          )}
        </>
      ) : (
        <>
          <FrameRoot ref={ref} role="frame" {...rest}></FrameRoot>
        </>
      )}
    </>
  );
});

Frame.defaultProps = {};

Frame.displayName = 'Frame';

export { Frame };
