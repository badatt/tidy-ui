import React from 'react';
import { TextInputLabel, TextInputMain, TextInputRoot } from './components';
import { ITextInputProps } from './types';

const TextInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { caption, ...rest } = props;
  return (
    <TextInputRoot>
      <TextInputMain ref={ref} role="form" {...rest} />
      {caption && <TextInputLabel {...rest}>{caption}</TextInputLabel>}
    </TextInputRoot>
  );
});

TextInput.defaultProps = {
  disabled: false,
  sz: 'md',
  variant: 'outlined',
};

TextInput.displayName = 'Input';

export { TextInput };
