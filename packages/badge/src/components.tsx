import { css, styled } from '@tidy-ui/theme';
import { dotBadge, standardBadge } from './styles';
import { IBadgeProps } from './types';

const getBadge = (isDotted?: boolean) => (isDotted ? dotBadge : standardBadge);

/**
 * Internal root component with styles
 *
 */
const BadgeRoot = styled.span<IBadgeProps>`
  ${({ isInvisible, isDotted }) => css`
    display: flex;
    position: relative;
    width: fit-content;
    ${isInvisible ? null : getBadge(isDotted)}
  `}
`;

export { BadgeRoot };
