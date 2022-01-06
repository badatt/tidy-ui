import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { ExternalLinkIcon } from '@tidy-ui/icons';
import { ICardFooterProps, ICardHeaderProps, ICardProps } from './types';

const CardHeaderRoot = styled.header<ICardHeaderProps>`
  ${({ theme: { typography, palette }, separated }) => css`
    position: relative;
    font-weight: ${typography.fontWeightBold};
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    width: 100%;
    ${separated &&
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

const Icon = styled(ExternalLinkIcon)<ICardHeaderProps>`
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
  const { children, href, ...rest } = props;
  return (
    <CardHeaderRoot ref={ref} {...rest}>
      {children}
      {href && (
        <Link href={href} target="_blank">
          <Icon {...rest} />
        </Link>
      )}
    </CardHeaderRoot>
  );
});

const CardRoot = styled.section<ICardProps>`
  ${({ theme: { palette, layout }, rounded, accent, href }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${palette.background.card};
    box-shadow: ${layout.shadow};
    color: ${palette.text.primary};
    margin-bottom: 1.875rem;
    ${rounded &&
    css`
      border-radius: ${layout.radius};
    `}
    ${accent &&
    css`
      border-top: 2px solid ${palette[accent!][600]};
    `}
    ${href &&
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
  ${({ theme: { palette }, separated }) => css`
    ${separated &&
    css`
      border-top: 1px solid ${palette.divider};
    `}
  `}
`;

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { children, href } = props;
  return (
    <CardRoot ref={ref} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </CardRoot>
  );
});

Card.defaultProps = {
  rounded: true,
};

export { Card, CardBody, CardFooter, CardHeader };
