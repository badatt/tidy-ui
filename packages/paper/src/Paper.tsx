import React from 'react';
import { css, styled } from '@tidy-ui/theme';
import { IPaperProps } from './types';

const PaperRoot = styled.section<IPaperProps>`
  ${({ theme, rounded }) => css`
    display: flex;
    padding: 1rem;
    background-color: ${theme.palette.background.paper};
    border-radius: ${rounded && theme.layout.radius};
    box-shadow: ${theme.layout.shadow};
    color: ${theme.palette.text.primary};
    margin-bottom: 1.875rem;
  `}
`;

const Paper = React.forwardRef<HTMLDivElement, IPaperProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <PaperRoot ref={ref} {...rest} className={className}>
      {children}
    </PaperRoot>
  );
});

export { Paper };
