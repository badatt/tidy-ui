import React from 'react';
import { ChipIcon, ChipRoot } from './components';
import { IChipProps } from './types';

/**
 * Chip component can be used to display a badge to highlight a state. It comes
 * with various sizes, tones. It can embed an icon, make it clickable &
 * create an outlined variant
 */
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
