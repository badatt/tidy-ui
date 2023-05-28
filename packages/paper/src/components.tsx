import { applyStandardOverrideStyles, createFontStyle, css, styled } from '@tidy-ui/commons';
import { IPaperProps } from './types';

/**
 * Paper root component
 *
 * @internal
 */
const PaperRoot = styled.section<IPaperProps>`
  ${({ theme: { palette, layout }, isSharp }) => css`
    display: block;
    padding: 1rem;
    background-color: ${palette.background.paper};
    border-radius: ${!isSharp && layout.radius};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    ${createFontStyle()}
    ${applyStandardOverrideStyles}
  `}
`;

export { PaperRoot };
