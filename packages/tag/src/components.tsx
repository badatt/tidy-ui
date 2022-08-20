import { css, hsla, styled } from '@tidy-ui/commons';
import { filledContent, outlinedContent, sizeStyles } from './style';
import { INewTagInput, ITagGroupProps, ITagProps } from './types';

/**
 * Internal Tag root
 *
 * @internal
 */
const TagRoot = styled.div<ITagProps>`
  ${({ outlined, size, disabled }) => css`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: ${sizeStyles[size!].padding};
    border-radius: ${sizeStyles[size!].borderRadius};
    font-size: ${sizeStyles[size!].fontSize};
    line-height: ${sizeStyles[size!].lineHeight};
    width: fit-content;
    ${outlined ? outlinedContent : filledContent}
    ${disabled &&
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
  ${({ size }) => css`
    cursor: pointer;
    height: ${sizeStyles[size!].iconSize};
    width: ${sizeStyles[size!].iconSize};
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
  ${({ theme: { isDark, palette }, size, tone }) => css`
    cursor: pointer;
    height: ${sizeStyles[size!].addNewIconSize};
    width: ${sizeStyles[size!].addNewIconSize};
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
  `}
`;

/**
 * Input field for adding new tag
 *
 * @internal
 */
const NewTagInput = styled.input<INewTagInput>`
  ${({ theme: { isDark, palette }, tone, withSize }) => css`
    width: ${sizeStyles[withSize!].addNewTagInputWidth};
    outline: none;
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.1) : palette[tone!][50]};
    border: 1px solid ${palette[tone!][400]};
    transition: border-color 0.3s ease-in-out;
    padding: ${sizeStyles[withSize!].padding};
    border-radius: ${sizeStyles[withSize!].borderRadius};
    font-size: ${sizeStyles[withSize!].fontSize};
    line-height: ${sizeStyles[withSize!].lineHeight};
    &:focus {
      border: 0;
      outline: 2px solid ${palette[tone!][500]};
    }
    &:hover {
      border: 0;
      outline: 2px solid ${palette[tone!][500]};
    }
  `}
`;

export { AddNewTagIcon, NewTagInput, TagGroupRoot, TagIcon, TagRoot };
