import { createFontStyle, css } from '@tidy-ui/commons';
import { ICardProps } from './types';

const cardStyles = css<ICardProps>`
  ${({ theme: { palette, layout }, isSharp, accent, accentPosition, href, margin, height, width }) => css`
    ${createFontStyle()}
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin: ${margin};
    height: ${height};
    width: ${width};
    ${!isSharp &&
    css`
      border-radius: ${layout.radius};
    `}
    ${accent && `border-${accentPosition}: 2px solid ${palette[accent][600]};`}
    ${href &&
    css`
      cursor: pointer;
    `}
  `}
`;

export { cardStyles };
