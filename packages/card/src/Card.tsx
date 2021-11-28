import React from 'react';
import sc, { css } from 'styled-components';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: string;
}

export interface ICardHeaderProps extends ICardProps {
  separator?: boolean;
}

const CardHeader = sc.header<ICardHeaderProps>`
${({ separator }) => css`
  padding: 1rem 1.25rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  font-weight: 700;

  ${separator &&
  css`
    border-bottom: 1px solid #edf1f7;
  `}
`}
`;

const CardBody = sc.div<ICardProps>`
  ${() => css`
    padding: 1rem 1.25rem;
    overflow: auto;
    flex: 1;
    -ms-flex: 1 1 auto;
    position: relative;
  `}
`;

const CardFooter = sc.header<ICardHeaderProps>`
${({ separator }) => css`
  padding: 1rem 1.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-weight: 700;

  ${separator &&
  css`
    border-top: 1px solid #edf1f7;
  `}
`}
`;

const CardRoot = sc.div<ICardProps>`
  ${() => css`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border: 0px solid transparent;
    border-radius: 0.25rem;
    box-shadow: rgb(44 51 73 / 10%) 0px 0.5rem 1rem 0px;
    color: rgb(34, 43, 69);
    margin-bottom: 1.875rem;
  `}
`;

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <CardRoot ref={ref} {...rest} className={className}>
      {children}
    </CardRoot>
  );
});

export { Card, CardHeader, CardBody, CardFooter };
