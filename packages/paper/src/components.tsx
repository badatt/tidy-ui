import { css, styled } from '@tidy-ui/theme';
import { IPaperProps } from './types';

/**
 * Paper root component
 *
 * @internal
 */
const PaperRoot = styled.section<IPaperProps>`
  ${({ theme, isSharp }) => css`
    display: flex;
    padding: 1rem;
    background-color: ${theme.palette.background.paper};
    border-radius: ${!isSharp && theme.layout.radius};
    box-shadow: ${theme.layout.shadow};
    color: ${theme.palette.text.primary};
    margin-bottom: 1.875rem;
  `}
`;

export { PaperRoot };
