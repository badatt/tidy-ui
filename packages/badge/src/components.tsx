import { css, styled } from '@tidy-ui/theme';
import { dotBadge, standardBadge } from './styles';
import { IBadgeProps } from './types';

/**
 * Returns the required badge variant
 *
 * @param {boolean} isDotted if the badge is dotted or not
 * @returns {JSX.Element} badge variant
 */
const getBadge = (isDotted?: boolean) => (isDotted ? dotBadge : standardBadge);

/**
 * Internal root component with styles
 *
 * @internal
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
