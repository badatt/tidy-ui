import { css, styled } from '@tidy-ui/commons';
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
  ${({ dotted, hidden }) => css`
    display: flex;
    position: relative;
    width: fit-content;
    ${hidden ? null : getBadge(dotted)}
  `}
`;

export { BadgeRoot };
