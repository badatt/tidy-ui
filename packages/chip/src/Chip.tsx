import React from 'react';
import { ChipIcon, ChipRoot } from './components';
import { IChipProps } from './types';

const Chip = React.forwardRef<HTMLDivElement, IChipProps>((props, ref) => {
  const { children, icon, ...rest } = props;
  return (
    <ChipRoot ref={ref} role="chip" {...rest} icon={icon}>
      {icon && <ChipIcon {...rest}>{icon}</ChipIcon>}
      {children}
    </ChipRoot>
  );
});

Chip.defaultProps = {
  clickable: false,
  disabled: false,
  outlined: false,
  size: 'md',
  tone: 'major',
};

export { Chip };
