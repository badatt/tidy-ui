import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { ICardProps } from './types';

const CardRoot = styled.section<ICardProps>`
  ${({ theme: { palette, layout }, rounded }) => css`
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

Card.defaultProps = {
  rounded: true,
};

export { Card };
