import { css, hsla, Icon, styled } from '@tidy-ui/commons';
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
    border-radius: 0.25rem;
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
const TagCloseIcon = styled(Icon.Close)<ITagProps>`
  cursor: pointer;
`;

/**
 * TagGroup root component
 *
 * @internal
 */
const TagGroupRoot = styled.div<ITagGroupProps>`
  ${({ size }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: ${sizeStyles[size!].fontSize};
    gap: 0.5rem;
  `}
`;

/**
 * Icon embedded inside add new tag button
 *
 * @internal
 */
const AddNewTagIcon = styled(Icon.AddCircle)<ITagGroupProps>`
  ${({ theme: { isDark, palette }, tone }) => css`
    cursor: pointer;
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
    border-radius: 0.25rem;
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

export { AddNewTagIcon, NewTagInput, TagCloseIcon, TagGroupRoot, TagRoot };
