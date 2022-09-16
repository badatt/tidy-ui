import { css, styled } from '@tidy-ui/commons';
import { IPalette } from '@tidy-ui/types';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';
import { IMessageProps } from './types';

/**
 * Internal Message root component
 *
 * @internal
 */
const MessageRoot = styled.div<IMessageProps>`
  ${({ stretched, margin }) => css`
    margin: ${margin};
    width: ${stretched ? '100%' : 'fit-content'};
    position: relative;
  `}
`;

/**
 * Close button color
 *
 * @param {boolean} isDark isDark check
 * @param {IPalette} palette theme palette
 * @param {string} color color string
 * @returns {string} color in hsla
 */
const closeButtonColor = (isDark: boolean, palette: IPalette, color: string): string => {
  return isDark ? palette[color][400] : palette[color][600];
};

/**
 * CloseButton component
 *
 * @internal
 */
const CloseButton = styled.i<IMessageProps>`
  ${({ theme: { palette, isDark }, tone, outlined }) => css`
    height: 1rem;
    width: 1rem;
    position: absolute;
    color: ${palette[tone!][50]};
    cursor: pointer;
    ${outlined
      ? css`
          top: 26px;
          right: 2px;
          color: ${closeButtonColor(isDark, palette, tone!)};
        `
      : css`
          top: 24px;
          right: 2px;
          color: ${palette[tone!][50]};
        `}
  `}
`;

/**
 * Message widget label component
 *
 * @internal
 */
const MessageLabel = styled.div<IMessageProps>`
  ${({ theme: { layout, typography }, sharp, outlined }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-top-left-radius: ${!sharp && layout.radius};
    border-top-right-radius: ${!sharp && layout.radius};
    width: fit-content;
    padding: 0.25rem 1rem;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: ${typography.fontWeightBold};
    ${outlined ? outlinedLabel : filledLabel}
    * {
      height: 0.75rem;
      width: 0.75rem;
    }
  `}
`;

/**
 * MessageContent component
 *
 * @internal
 */
const MessageContent = styled.div<IMessageProps>`
  ${({ theme: { layout }, sharp, stretched, withoutLabel, outlined }) => css`
    padding: 0.75rem 1rem;
    border-radius: ${!sharp && layout.radius};
    ${!withoutLabel &&
    css`
      border-top-left-radius: 0;
    `}
    width: ${stretched ? '100%' : 'fit-content'};
    ${outlined ? outlinedContent : filledContent}
  `}
`;

export { CloseButton, MessageContent, MessageLabel, MessageRoot };
