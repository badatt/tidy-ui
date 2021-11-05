import React from "react";
import cx from "clsx";

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div ref={ref} {...rest} className={cx(className)}>
      {children}
    </div>
  );
});

export { Card };
