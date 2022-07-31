import { css, styled } from '@tidy-ui/theme';
import { ICardFooterProps } from './types';

/**
 * CardFooter component, powered by various styles (with theming) and settings
 *
 */
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

CardFooter.defaultProps = {
  isDivided: false,
};

export { CardFooter };
