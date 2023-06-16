import React, { ReactElement } from 'react';
import { useHash } from '@tidy-ui/commons';
import { RadioRoot } from './components';
import { RadioOption } from './RadioOption';
import { IRadioProps } from './types';

/** @internal */
interface RadioComponent extends React.ForwardRefExoticComponent<IRadioProps & React.RefAttributes<HTMLLIElement>> {
  /** @internal */
  Option: typeof RadioOption;
}

/**
 * Radio can be used when only one option may be selected
 * in a choice over a series of options, powered by theming
 * styles etc. Radio should only have RadioOption elements
 * as its children
 */
const Radio = React.forwardRef<HTMLDivElement, IRadioProps>((props, ref) => {
  const { children, value, isVertical, onChange, ...rest } = props;
  const joinedValues = React.Children.map(children, (c) => (c as ReactElement).props.value)?.join('');

  const name = useHash(joinedValues, { maxLen: 8 });

  return (
    <RadioRoot ref={ref} role="radiogroup" isVertical={isVertical} {...rest}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        const defaultChecked = value && child.props.value == value;
        return React.cloneElement(child, { ...child.props, defaultChecked, name, onChange });
      })}
    </RadioRoot>
  );
}) as RadioComponent;

Radio.defaultProps = {
  isVertical: false,
};

Radio.displayName = 'Radio';

Radio.Option = RadioOption;

export { Radio };
