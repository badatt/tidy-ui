import { css } from 'styled-components';
import { styled } from '@tidy-ui/theme';
import { ICardHeaderProps } from './types';

const CardHeader = styled.header<ICardHeaderProps>`
  display: flex;
  font-weight: ${({ theme }) => theme.typography?.fontWeightBold};
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  ${({ theme, separated }) => css`
    ${separated &&
    css`
      border-bottom: 1px solid ${theme.palette?.divider};
    `}
  `}
`;

export { CardHeader };
