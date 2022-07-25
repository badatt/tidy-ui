import React, { forwardRef } from 'react';
import { CloseIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/theme';
import { filledContent, outlinedContent, sizeStyles } from './style';
import { ITagProps } from './types';

const TagRoot = styled.div<ITagProps>`
  ${({ outlined, magnitude, disable }) => css`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: ${sizeStyles[magnitude!].padding};
    border-radius: ${sizeStyles[magnitude!].borderRadius};
    font-size: ${sizeStyles[magnitude!].fontSize};
    line-height: ${sizeStyles[magnitude!].lineHeight};
    width: fit-content;
    ${outlined ? outlinedContent : filledContent}
    ${disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  `}
`;

const TagIcon = styled.i<ITagProps>`
  ${({ magnitude }) => css`
    cursor: pointer;
    height: ${sizeStyles[magnitude!].iconSize};
    width: ${sizeStyles[magnitude!].iconSize};
  `}
`;

const Tag = forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  const { children, icon, onClose, ...rest } = props;
  return (
    <TagRoot ref={ref} role="tag" {...rest}>
      {icon && <TagIcon {...rest}>{icon}</TagIcon>}
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
  color: 'major',
  magnitude: 'md',
  outlined: false,
};

export { Tag };
