import { applyStandardOverrideStyles, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { filledContent, outlinedContent, sizeStyles } from './styles';
import { INewTagInput, ITagGroupProps, ITagProps } from './types';

/**
 * Internal Tag root
 *
 * @internal
 */
const TagRoot = styled.div<ITagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  width: fit-content;
  ${({ isFilled, girth, icon }) => css`
    padding: ${sizeStyles[girth!].padding};
    font-size: ${sizeStyles[girth!].fontSize};
    line-height: ${sizeStyles[girth!].lineHeight};
    ${isFilled ? filledContent : outlinedContent}
    ${icon &&
    css`
      gap: 0.25rem;
    `}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Tag icon component
 *
 * @internal
 */
const TagCloseIcon = styled(Icon.Close)<ITagProps>`
  cursor: pointer;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
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
  ${({ girth }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
  `}
  ${applyStandardOverrideStyles}
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
    opacity: 0.2;
  `}
  &:hover {
    opacity: 1;
  }
`;

/**
 * Input field for adding new tag
 *
 * @internal
 */
const NewTagInput = styled.input<INewTagInput>`
  outline: none;
  border-radius: 0.25rem;
  transition: border-color 0.3s ease-in-out;
  ${({ theme: { isDark, palette }, tone, girth }) => css`
    width: ${sizeStyles[girth!].addNewTagInputWidth};
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    border: 1px solid ${palette[tone!][400]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.1) : palette[tone!][50]};
    padding: ${sizeStyles[girth!].padding};
    font-size: ${sizeStyles[girth!].fontSize};
    line-height: ${sizeStyles[girth!].lineHeight};
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
