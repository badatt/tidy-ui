import React from 'react';
import { TextInputLabel, TextInputMain, TextInputRoot } from './components';
import { ITextInputProps } from './types';

const TextInput = React.forwardRef<HTMLInputElement, Omit<ITextInputProps, 'children'>>((props, ref) => {
  const { caption, ...rest } = props;
  const { status } = rest;
  return (
    <TextInputRoot>
      <TextInputMain ref={ref} role="form" {...rest} />
      {caption && <TextInputLabel {...{ status }}>{caption}</TextInputLabel>}
    </TextInputRoot>
  );
});

TextInput.defaultProps = {
  girth: 'md',
  variant: 'outlined',
};

TextInput.displayName = 'Input';

export { TextInput };
