import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Status } from '@tidy-ui/types';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: Status;
  rounded?: boolean;
}

const CardRoot = styled.section<ICardProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette?.background?.card};
  border-radius: ${({ theme }) => theme.layout?.radius};
  box-shadow: ${({ theme }) => theme.layout?.shadow};
  color: ${({ theme }) => theme.palette?.text?.primary};
  margin-bottom: 1.875rem;
`;

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <CardRoot ref={ref} {...rest} className={className}>
      {children}
    </CardRoot>
  );
});

export { Card };
