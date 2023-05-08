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

const Radio = React.forwardRef<HTMLLIElement, IRadioProps>((props, ref) => {
  const { children, value, vertical, ...rest } = props;
  const joinedValues = React.Children.map(children, (c) => (c as ReactElement).props.value)?.join('');

  const name = useHash(joinedValues, { maxLen: 8 });

  return (
    <RadioRoot role="radiogroup" vertical={vertical}>
      {React.Children.map(children, (c) => {
        const child = c as React.ReactElement;
        const defaultChecked = value && child.props.value == value;
        return React.cloneElement(child, { defaultChecked, name, ref, ...rest });
      })}
    </RadioRoot>
  );
}) as RadioComponent;

Radio.defaultProps = {
  vertical: false,
};

Radio.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    const allowed = ['RadioOption'];
    const errorMessage = `${componentName} accepts only ${allowed} as children`;
    const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
    if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
      return new Error(`Invalid nodes. ${errorMessage}`);
    }
    return null;
  },
};

Radio.displayName = 'Radio';

Radio.Option = RadioOption;

export { Radio };
