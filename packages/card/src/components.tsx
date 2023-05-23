import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { cardStyles } from './styles';
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

/**
 * Internal CardHeader root component
 *
 * @internal
 */
const CardHeaderRoot = styled.header<ICardHeaderProps>`
  ${({ theme: { palette }, isDivided }) => css`
    ${createFontStyle('h5')}
    position: relative;
    width: 100%;
    ${isDivided &&
    css`
      padding-bottom: 0.25rem;
      border-bottom: 1px solid ${palette.divider};
    `}
  `}
  ${applyStandardOverrideStyles}
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
  &:hover ${Link} {
    display: flex;
  }
  ${applyStandardOverrideStyles}
`;

/**
 * Internal CardFooter root component
 *
 * @internal
 */
const CardFooterRoot = styled.footer<ICardFooterProps>`
  ${createFontStyle('body2')}
  ${({ theme: { palette }, isDivided }) => css`
    ${isDivided &&
    css`
      padding-top: 0.25rem;
      border-top: 1px solid ${palette.divider};
    `}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Internal CardBody root component
 *
 * @internal
 */
const CardBodyRoot = styled.div`
  padding: 0.25rem 0;
  ${applyStandardOverrideStyles}
`;

export { CardBodyRoot, CardFooterRoot, CardHeaderRoot, CardRoot, LaunchIcon, Link };
