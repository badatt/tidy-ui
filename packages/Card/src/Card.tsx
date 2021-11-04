import React from "react";

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div ref={ref} {...rest} className={className}>
      {children}
    </div>
  );
});

export { Card };
