import { applyStandardOverrideStyles, createFontStyle, css, styled } from '@tidy-ui/commons';
import { alertFilledStyle, alertStyles } from './styles';
import { IAlertFooterProps, IAlertProps, IAlertTitleProps } from './types';

/**
 * Internal Alert root component
 *
 * @internal
 */
const AlertRoot = styled.div<IAlertProps>`
  padding: 1rem;
  display: flex;
  align-items: center;
  ${createFontStyle()}
  ${({ theme: { layout }, isFilled, height, width, isSharp }) => css`
    height: ${height};
    width: ${width};
    ${isFilled ? alertFilledStyle : alertStyles}
    ${!isSharp &&
    css`
      border-radius: ${layout.radius};
    `}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Internal AlertFooter root component
 *
 * @internal
 */
const AlertFooterRoot = styled.footer<IAlertFooterProps>`
  padding-top: 1rem;
  ${applyStandardOverrideStyles}
`;

/**
 * Internal AlertIcon
 *
 * @internal
 */
const AlertIcon = styled.span<Pick<IAlertProps, 'isFilled' | 'status'>>`
  padding-right: 1rem;
  display: flex;
  ${({ theme: { palette, isDark }, isFilled, status }) => css`
    ${!isFilled &&
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
 * Internal AlertTitle root component
 *
 * @internal
 */
const AlertTitleRoot = styled.header<IAlertTitleProps>`
  padding-bottom: 0.5rem;
  ${applyStandardOverrideStyles}
`;

export { AlertFooterRoot, AlertIcon, AlertRoot, AlertTitleRoot };
