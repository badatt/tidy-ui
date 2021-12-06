import React from 'react';
import styled, { css } from 'styled-components';

import { Size, Status } from '@tidy-ui/types';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: Status;
  rounded?: boolean;
}

const CardRoot = styled.section<ICardProps>`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border: 0px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgb(44 51 73 / 10%) 0px 0.5rem 1rem 0px;
  color: rgb(34, 43, 69);
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
