import { color, createFontStyle, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { ICardFooterProps, ICardHeaderProps, ICardProps } from './types';

/**
 * Internal styled anchor tag
 *
 * @internal
 */
const Link = styled.a`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: ${hsla(color.slate[400], 0.1)};
  border-radius: 50%;
  &:hover {
    background-color: ${hsla(color.slate[400], 0.2)};
  }
`;

const cardStyles = css<ICardProps>`
  ${({ theme: { palette, layout }, sharp, accent, accentPosition, href, margin, h, w }) => css`
    ${createFontStyle()}
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin: ${margin};
    height: ${h};
    width: ${w};
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
    display: flex;
  }
`;

/**
 * Internal CardHeader root component
 *
 * @internal
 */
const CardHeaderRoot = styled.header<ICardHeaderProps>`
  ${({ theme: { palette }, divided }) => css`
    ${createFontStyle('h5')}
    position: relative;
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
    color: ${isDark ? palette['neutral'][500] : palette['neutral'][400]};
  `}
`;

/**
 * Internal Card root component
 *
 * @internal
 */
const CardRoot = styled.section<ICardProps>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${cardStyles}
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
  ${createFontStyle('body2')}
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
