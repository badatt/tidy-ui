import React, { forwardRef } from 'react';
import { CloseIcon } from '@tidy-ui/commons';
import { TagIcon, TagRoot } from './components';
import { ITagProps } from './types';

/**
 * Tag component
 *
 */
const Tag = forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  const { children, className, withIcon, onClose, ...rest } = props;
  return (
    <TagRoot className={className} ref={ref} role="tag" {...rest}>
      {withIcon && <TagIcon {...rest}>{withIcon}</TagIcon>}
      {children}
      {onClose && (
        <TagIcon {...rest} onClick={onClose} role="close-tag-btn">
          <CloseIcon />
        </TagIcon>
      )}
    </TagRoot>
  );
});

Tag.defaultProps = {
  isOutlined: false,
  withColor: 'major',
  withSize: 'md',
};

export { Tag };
