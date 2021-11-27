import React from 'react';
import sc from 'styled-components/macro';
import cx from 'clsx';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledBtn = sc.div`
  padding: 16px;
`;

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <StyledBtn ref={ref} {...rest} className={cx(className)} role="card">
      {children}
    </StyledBtn>
  );
});

export { Card };
