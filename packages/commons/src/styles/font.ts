import { FlattenInterpolation, ThemeProps } from 'styled-components';
import { ITidyUITheme, ITypography } from '@tidy-ui/types';
import { css } from '../theme';

/**
 * Font type
 */
type Font = keyof ITypography;

/**
 * Creates font styles for a given typographical text type
 *
 * @param {string }text typographical text type
 * @returns {FlattenInterpolation} css
 */
const font = (text: Font): FlattenInterpolation<ThemeProps<ITidyUITheme>> => css`
  ${({ theme: { typography } }) => css`
    font-size: ${typography[text].fontSize};
    font-weight: ${typography[text].fontWeight};
    letter-spacing: ${typography[text].letterSpacing};
    line-height: ${typography[text].lineHeight};
  `}
`;

export default font;
