import { css, styled } from '@tidy-ui/commons';
import { IPaperProps } from './types';

/**
 * Paper root component
 *
 * @internal
 */
const PaperRoot = styled.section<IPaperProps>`
  ${({ theme: { palette, layout }, sharp, margin, h, w }) => css`
    display: block;
    padding: 1rem;
    height: ${h};
    width: ${w};
    background-color: ${palette.background.paper};
    border-radius: ${!sharp && layout.radius};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin-bottom: ${margin};
    ${h &&
    css`
      overflow-y: auto;
    `}
  `}
`;

export { PaperRoot };
