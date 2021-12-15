import React from 'react';
import { styled } from '@tidy-ui/theme';

export interface IPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: boolean;
}

const PaperRoot = styled.section<IPaperProps>`
  display: flex;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette?.background?.paper};
  border-radius: ${({ theme }) => theme.layout?.radius};
  box-shadow: ${({ theme }) => theme.layout?.shadow};
  color: ${({ theme }) => theme.palette?.text?.primary};
  margin-bottom: 1.875rem;
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
