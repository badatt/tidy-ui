import { FlattenInterpolation, ThemeProps } from 'styled-components';
import { css } from '../theme';
import { ITidyUITheme, ITypography } from '../theme/types';

/**
 * Font type
 */
type Font = keyof ITypography;

/**
 * Creates font styles for a given typographical text type
 *
 * @param {string} variant typographical text type
 * @returns {FlattenInterpolation} css
 */
const createFontStyle = (variant: Font = 'body1'): FlattenInterpolation<ThemeProps<ITidyUITheme>> => css`
  ${({ theme: { typography } }) => css`
    font-size: ${typography[variant].fontSize};
    font-weight: ${typography[variant].fontWeight};
    letter-spacing: ${typography[variant].letterSpacing};
    line-height: ${typography[variant].lineHeight};
  `}
`;

export default createFontStyle;
