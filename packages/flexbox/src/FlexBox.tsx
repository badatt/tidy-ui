import React from 'react';
import { FlexBoxRoot } from './components';
import { IFlexBoxProps } from './types';

const FlexBox = React.forwardRef<HTMLDivElement, IFlexBoxProps>((props, ref) => {
  const { children, ele, ...rest } = props;

  let centerProps;
  if (rest.ctr) {
    centerProps = { ...rest, alc: 'center', fuh: !rest.height, jsc: 'center' };
  } else {
    centerProps = { ...rest };
  }

  return (
    <FlexBoxRoot ref={ref} role="presentation" {...centerProps}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </FlexBoxRoot>
  );
});

FlexBox.defaultProps = {
  alc: 'flex-start',
  ctr: false,
  fld: 'row',
  fuh: false,
  jsc: 'flex-start',
  nowrap: false,
};

FlexBox.displayName = 'FlexBox';

export { FlexBox };
