import React from "react";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    return (
      <button ref={ref} {...rest} className={className}>
        {children}
      </button>
    );
  }
);

export { Button };
