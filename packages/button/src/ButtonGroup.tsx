import React from 'react';
import { ButtonGroupRoot } from './components';
import { IButtonGroupProps } from './types';

/**
 * ButtonGroup can be use to group several look alike buttons to form a grouped CTAs
 *
 */
const ButtonGroup = React.forwardRef<HTMLDivElement, IButtonGroupProps>((props, ref) => {
  const { children, disabled, ...rest } = props;
  return (
    <ButtonGroupRoot role="button" ref={ref} {...rest}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        return React.cloneElement(child, { disabled });
      })}
    </ButtonGroupRoot>
  );
});

ButtonGroup.defaultProps = {
  disabled: false,
  isStretched: false,
  isUnified: false,
  isVertical: false,
};

ButtonGroup.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['Anchor', 'Button', 'IconButton'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
