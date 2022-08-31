import { css, Icon, styled } from '@tidy-ui/commons';
import { ICardFooterProps, ICardHeaderProps, ICardProps } from './types';

/**
 * Internal CardHeader root component
 *
 * @internal
 */
const CardHeaderRoot = styled.header<ICardHeaderProps>`
  ${({ theme: { typography, palette }, divided }) => css`
    position: relative;
    font-weight: ${typography.fontWeightBold};
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    ${divided &&
    css`
      border-bottom: 1px solid ${palette.divider};
    `}
  `}
`;

/**
 * Internal styled anchor tag
 *
 * @internal
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
 * @internal
 */
const LaunchIcon = styled(Icon.Launch)`
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
 * @internal
 */
const CardRoot = styled.section<ICardProps>`
  ${({ theme: { palette, layout }, sharp, accent, accentPosition, href }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin-bottom: 1.875rem;
    ${!sharp &&
    css`
      border-radius: ${layout.radius};
    `}
    ${accent && `border-${accentPosition}: 2px solid ${palette[accent][600]};`}
    ${href &&
    css`
      cursor: pointer;
    `}
  `}
  &:hover ${Link} {
    display: block;
  }
`;

/**
 * Internal CardFooter root component
 *
 * @internal
 */
const CardFooterRoot = styled.footer<ICardFooterProps>`
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  ${({ theme: { palette }, divided }) => css`
    ${divided &&
    css`
      border-top: 1px solid ${palette.divider};
    `}
  `}
`;

/**
 * Internal CardBody root component
 *
 * @internal
 */
const CardBodyRoot = styled.div`
  padding: 0.5rem 1rem;
`;

export { CardBodyRoot, CardFooterRoot, CardHeaderRoot, CardRoot, LaunchIcon, Link };
