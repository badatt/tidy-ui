import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { TagCloseIcon, TagRoot } from './components';
import { ITagProps } from './types';

/**
 * Tag can be used to represent named identifiers to highlight
 *
 */
const Tag = React.forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  const { children, icon, onClose, ...rest } = props;

  const gapRequired = React.useMemo(() => {
    return [icon, onClose].some(Boolean);
  }, [icon, onClose]);

  return (
    <TagRoot ref={ref} role="listitem" icon={gapRequired} {...rest}>
      {icon && <Icon ele={icon} />}
      {children}
      {onClose && <Icon ele={<TagCloseIcon onClick={onClose} />} role="button" />}
    </TagRoot>
  );
});

Tag.defaultProps = {
  girth: 'md',
  isFilled: false,
  tone: 'neutral',
};

Tag.displayName = 'Tag';

export { Tag };
