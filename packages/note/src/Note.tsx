import React from 'react';
import { NoteRoot } from './components';
import { INoteProps } from './types';

const Note = React.forwardRef<HTMLDivElement, INoteProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <NoteRoot ref={ref} role="note" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
    </NoteRoot>
  );
});

Note.defaultProps = {};

Note.displayName = 'Note';

export { Note };
