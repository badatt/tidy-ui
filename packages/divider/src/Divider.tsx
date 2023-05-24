import React from 'react';
import { DividerRoot } from './components';
import { EnhancedDivider } from './EnhancedDivider';
import { IDividerProps } from './types';

/** @internal */
interface DividerComponent
  extends React.ForwardRefExoticComponent<Omit<IDividerProps, 'children'> & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Enhanced: typeof EnhancedDivider;
}

/**
 * Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, powered by various styles (with theming) and settings
 */
const Divider = React.forwardRef<HTMLHRElement, Omit<IDividerProps, 'children'>>((props, ref) => {
  const { className, ...rest } = props;
  return <DividerRoot ref={ref} className={className} role="separator" {...rest} />;
}) as DividerComponent;

Divider.defaultProps = {
  density: 'thin',
  isVertical: false,
  margin: '0.5rem',
  tone: 'neutral',
  variant: 'solid',
};

Divider.displayName = 'Divider';

Divider.Enhanced = EnhancedDivider;

export { Divider };
