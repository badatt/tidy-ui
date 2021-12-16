import { css } from 'styled-components';
import { styled } from '@tidy-ui/theme';

interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

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
