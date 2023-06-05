import React from 'react';
import { NoteRoot } from './components';
import { INoteProps } from './types';

const Note = React.forwardRef<HTMLDivElement, INoteProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <NoteRoot ref={ref} role="note" {...rest}>
      {children}
    </NoteRoot>
  );
});

Note.defaultProps = {};

Note.displayName = 'Note';

export { Note };
