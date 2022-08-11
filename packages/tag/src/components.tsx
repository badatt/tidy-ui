import { css, hsla, styled } from '@tidy-ui/commons';
import { filledContent, outlinedContent, sizeStyles } from './style';
import { ITagGroupProps, ITagProps } from './types';

/**
 * Internal Tag root
 *
 * @internal
 */
const TagRoot = styled.div<ITagProps>`
  ${({ isOutlined, withSize, isDisabled }) => css`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: ${sizeStyles[withSize!].padding};
    border-radius: ${sizeStyles[withSize!].borderRadius};
    font-size: ${sizeStyles[withSize!].fontSize};
    line-height: ${sizeStyles[withSize!].lineHeight};
    width: fit-content;
    ${isOutlined ? outlinedContent : filledContent}
    ${isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  `}
`;

/**
 * Tag icon component
 *
 * @internal
 */
const TagIcon = styled.i<ITagProps>`
  ${({ withSize }) => css`
    cursor: pointer;
    height: ${sizeStyles[withSize!].iconSize};
    width: ${sizeStyles[withSize!].iconSize};
  `}
`;

/**
 * TagGroup root component
 *
 * @internal
 */
const TagGroupRoot = styled.div<ITagGroupProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

/**
 * Icon embedded inside add new tag button
 *
 * @internal
 */
const AddNewTagIcon = styled.i<ITagGroupProps>`
  ${({ theme: { isDark, palette }, withSize, withColor }) => css`
    cursor: pointer;
    height: ${sizeStyles[withSize!].addNewIconSize};
    width: ${sizeStyles[withSize!].addNewIconSize};
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
  `}
`;

/**
 * Input field for adding new tag
 *
 * @internal
 */
const NewTagInput = styled.input<ITagGroupProps>`
  ${({ theme: { isDark, palette }, withColor, withSize }) => css`
    width: ${sizeStyles[withSize!].addNewTagInputWidth};
    outline: none;
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.1) : palette[withColor!][50]};
    border: 1px solid ${palette[withColor!][400]};
    transition: border-color 0.3s ease-in-out;
    padding: ${sizeStyles[withSize!].padding};
    border-radius: ${sizeStyles[withSize!].borderRadius};
    font-size: ${sizeStyles[withSize!].fontSize};
    line-height: ${sizeStyles[withSize!].lineHeight};
    &:focus {
      border: 0;
      outline: 2px solid ${palette[withColor!][500]};
    }
    &:hover {
      border: 0;
      outline: 2px solid ${palette[withColor!][500]};
    }
  `}
`;

export { AddNewTagIcon, NewTagInput, TagGroupRoot, TagIcon, TagRoot };
