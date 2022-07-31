import React from 'react';
import { LaunchIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/theme';
import { ICardFooterProps, ICardHeaderProps, ICardProps } from './types';

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
 * CardHeader component, powered by various styles (with theming) and settings
 *
 */
const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>((props, ref) => {
  const { children, withHref, ...rest } = props;
  return (
    <CardHeaderRoot ref={ref} {...rest}>
      {children}
      {withHref && (
        <Link href={withHref} target="_blank">
          <Icon {...rest} />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

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

/**
 * Card body component, powered by various styles (with theming) and settings
 *
 */
const CardBody = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
`;

/**
 * CardFooter component, powered by various styles (with theming) and settings
 *
 */
const CardFooter = styled.footer<ICardFooterProps>`
  display: flex;
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  ${({ theme: { palette }, isDivided }) => css`
    ${isDivided &&
    css`
      border-top: 1px solid ${palette.divider};
    `}
  `}
`;

/**
 * Card component powered by various styles (with theming) and settings. Can be used just
 * as is with a nice elevation effect that looks like a card on screen
 *
 */
const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, withHref } = props;
  return (
    <CardRoot ref={ref} {...props}>
      {withHref ? <a href={withHref}>{children}</a> : <>{children}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  isSharp: false,
};

CardFooter.defaultProps = {
  isDivided: false,
};

CardHeader.defaultProps = {
  isDivided: false,
};

export { Card, CardBody, CardFooter, CardHeader };
