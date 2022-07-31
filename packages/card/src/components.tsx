import { LaunchIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/theme';
import { ICardHeaderProps, ICardProps } from './types';

/**
 * Internal CardHeader root component
 *
 */
const CardHeaderRoot = styled.header<ICardHeaderProps>`
  ${({ theme: { typography, palette }, isDivided }) => css`
    position: relative;
    font-weight: ${typography.fontWeightBold};
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    ${isDivided &&
    css`
      border-bottom: 1px solid ${palette.divider};
    `}
  `}
`;

/**
 * Internal styled anchor tag
 *
 */
const Link = styled.a`
  display: none;
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  top: 0;
  right: 0;
`;

/**
 * Internal styled LaunchIcon
 *
 */
const Icon = styled(LaunchIcon)<ICardHeaderProps>`
  ${({ theme: { palette, isDark } }) => css`
    height: 1.25rem;
    width: 1.25rem;
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;
    color: ${isDark ? palette['neutral'][500] : palette['neutral'][400]};
  `}
`;

/**
 * Internal Card root component
 *
 */
const CardRoot = styled.section<ICardProps>`
  ${({ theme: { palette, layout }, isSharp, withAccent, withHref }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin-bottom: 1.875rem;
    ${!isSharp &&
    css`
      border-radius: ${layout.radius};
    `}
    ${withAccent &&
    css`
      border-top: 2px solid ${palette[withAccent][600]};
    `}
    ${withHref &&
    css`
      cursor: pointer;
    `}
  `}
  &:hover ${Link} {
    display: block;
  }
`;

export { CardHeaderRoot, CardRoot, Icon, Link };
