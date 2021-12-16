import { css } from 'styled-components';
import { styled } from '@tidy-ui/theme';

interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  separated?: boolean;
}

const CardFooter = styled.footer<ICardFooterProps>`
  display: flex;
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  ${({ theme, separated }) => css`
    ${separated &&
    css`
      border-top: 1px solid ${theme.palette?.divider};
    `}
  `}
`;

export { CardFooter };
