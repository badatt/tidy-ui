import { css, styled } from '@tidy-ui/commons';
import { IPalette } from '@tidy-ui/types';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';
import { INotificationProps } from './types';

/** @internal */
const NotificationRoot = styled.div<INotificationProps>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${({ theme: { layout }, sharp, outlined, margin, h, w }) => css`
    height: ${h};
    width: ${w};
    margin: ${margin};
    border-radius: ${!sharp && layout.radius};
    ${outlined ? outlinedContent : filledContent}
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
const CloseButton = styled.i<INotificationProps>`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  ${({ theme: { palette, isDark }, tone, outlined }) => css`
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

/** @internal */
interface ILableAllowed {
  /**
   * If `true`, leaves left margin for icon
   */
  isLabelAllowed?: boolean;
}

/**
 * NotificationContent component
 *
 * @internal
 */
const NotificationContent = styled.div<INotificationProps & ILableAllowed>`
  width: fit-content;
  ${({ withoutLabel, isLabelAllowed }) => css`
    ${isLabelAllowed &&
    css`
      margin-left: ${withoutLabel ? 0 : '2rem'};
    `}
  `}
`;

/**
 * Notification widget label component
 *
 * @internal
 */
const NotificationLabel = styled.div<INotificationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 1rem;
  text-transform: capitalize;
  margin-bottom: 0.5em;
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
  ${({ theme: { typography }, outlined }) => css`
    font-weight: ${typography.fontWeightBold};
    ${outlined ? outlinedLabel : filledLabel}
  `}
`;

const NotificationHeader = styled.div<INotificationProps>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  ${({ closable }) => css`
    flex-direction: ${closable ? 'row-reverse' : 'row'};
  `}
`;

export { CloseButton, NotificationContent, NotificationHeader, NotificationLabel, NotificationRoot };
