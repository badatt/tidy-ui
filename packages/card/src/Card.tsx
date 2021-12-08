import React from 'react';
import baseStyled, { css, ThemedStyledInterface } from 'styled-components';
import { Status } from '@tidy-ui/types';
import { ITidyUITheme } from '@tidy-ui/theme';

export const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: Status;
  rounded?: boolean;
}

const CardRoot = styled.section<ICardProps>`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette?.secondary?.main};
  border: 0px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgb(44 51 73 / 10%) 0px 0.5rem 1rem 0px;
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
