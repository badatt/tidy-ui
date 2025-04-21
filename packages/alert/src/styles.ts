import { css } from '@tidy-ui/commons';
import { IAlertProps } from './types';

/**
 * Normal Alert styles
 *
 * @internal
 */
const alertStyles = css<IAlertProps>`
  ${({ theme: { palette, layout }, status }) => css`
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    border-left: 4px solid ${palette[status!][500]};
  `}
`;

/**
 * Filled Alert styles
 *
 * @internal
 */
const alertFilledStyle = css<IAlertProps>`
  ${({ theme: { palette }, status }) => css`
    color: ${palette[status!][50]};
    background-color: ${palette[status!][700]};
  `}
`;

export { alertFilledStyle, alertStyles };
