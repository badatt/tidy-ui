import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { TagCloseIcon, TagRoot } from './components';
import { ITagProps } from './types';

/**
 * Tag component
 *
 */
const Tag = React.forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  const { children, className, icon, onClose, ...rest } = props;
  return (
    <TagRoot className={className} ref={ref} role="list" {...rest}>
      {icon && <Icon ele={icon} />}
      {children}
      {onClose && <Icon ele={<TagCloseIcon onClick={onClose} role="button" />} />}
    </TagRoot>
  );
});

Tag.defaultProps = {
  outlined: false,
  size: 'md',
  tone: 'major',
};

export { Tag };
