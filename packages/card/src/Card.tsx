import React from 'react';
import { LaunchIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/theme';
import { ICardFooterProps, ICardHeaderProps, ICardProps } from './types';

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

const Link = styled.a`
  display: none;
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  top: 0;
  right: 0;
`;

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

const CardBody = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
`;

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
