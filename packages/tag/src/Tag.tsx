import React, { forwardRef } from 'react';
import { CloseIcon } from '@tidy-ui/commons';
import { TagIcon, TagRoot } from './components';
import { ITagProps } from './types';

/**
 * Tag component
 *
 */
const Tag = forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  const { children, className, icon, onClose, ...rest } = props;
  return (
    <TagRoot className={className} ref={ref} role="list" {...rest}>
      {icon && <TagIcon {...rest}>{icon}</TagIcon>}
      {children}
      {onClose && (
        <TagIcon {...rest} onClick={onClose} role="button">
          <CloseIcon />
        </TagIcon>
      )}
    </TagRoot>
  );
});

Tag.defaultProps = {
  outlined: false,
  size: 'md',
  tone: 'major',
};

export { Tag };
