import React from 'react';
import { ChipIcon, ChipRoot } from './components';
import { IChipProps } from './types';

const Chip = React.forwardRef<HTMLDivElement, IChipProps>((props, ref) => {
  const { children, ele, icon, ...rest } = props;
  const { isFilled, tone } = rest;
  return (
    <ChipRoot ref={ref} role="status" {...rest} icon={icon}>
      {icon && <ChipIcon {...{ isFilled, tone }}>{icon}</ChipIcon>}
      {ele ? React.cloneElement(ele, {}, children) : children}
    </ChipRoot>
  );
});

Chip.defaultProps = {
  girth: 'md',
  isClickable: false,
  isFilled: false,
  tone: 'neutral',
};

Chip.displayName = 'Chip';

export { Chip };
