import React from "react";

export interface IPaperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Paper = React.forwardRef<HTMLDivElement, IPaperProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <div ref={ref} {...rest} className={className}>
      {children}
    </div>
  );
});

export { Paper };
