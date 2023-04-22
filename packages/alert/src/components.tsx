import { createFontStyle, css, styled } from '@tidy-ui/commons';
import { IAlertFooterProps, IAlertProps, IAlertTitleProps } from './types';

/**
 * Normal Alert styles
 *
 * @internal
 */
const alertStyles = css<IAlertProps>`
  ${({ theme: { palette, layout }, sharp, status }) => css`
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    border-left: 4px solid ${palette[status!][500]};
    ${!sharp &&
    css`
      border-radius: ${layout.radius};
    `}
  `}
`;

/**
 * Filled Alert styles
 *
 * @internal
 */
const alertFilledStyle = css<IAlertProps>`
  ${({ theme: { palette, layout }, sharp, status }) => css`
    color: ${palette[status!][50]};
    background-color: ${palette[status!][700]};
    ${!sharp &&
    css`
      border-radius: ${layout.radius};
    `}
  `}
`;

/**
 * Internal Alert root component
 *
 * @internal
 */
const AlertRoot = styled.section<IAlertProps>`
  padding: 1rem;
  display: flex;
  align-items: center;
  ${createFontStyle()}
  ${({ filled, h, w }) => css`
    height: ${h};
    width: ${w};
    ${filled ? alertFilledStyle : alertStyles}
  `}
`;

/**
 * Internal AlertFooter root component
 *
 * @internal
 */
const AlertFooterRoot = styled.footer<IAlertFooterProps>`
  padding-top: 0.5rem;
`;

/**
 * Internal AlertIcon
 *
 * @internal
 */
const AlertIcon = styled.span<IAlertProps>`
  padding-right: 1rem;
  ${({ theme: { palette, isDark }, filled, status }) => css`
    ${!filled &&
    css`
      color: ${isDark ? palette[status!][500] : palette[status!][600]};
    `}
  `}
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

/**
 * Internal AlertContent composes of Title, Footer and inside text
 *
 * @internal
 */
const AlertContent = styled.div<IAlertProps>`
  display: flex;
  flex-direction: column;
`;

/**
 * Internal AlertTitle root component
 *
 * @internal
 */
const AlertTitleRoot = styled.div<IAlertTitleProps>`
  padding-bottom: 0.5rem;
`;

export { AlertContent, AlertFooterRoot, AlertIcon, AlertRoot, AlertTitleRoot };
