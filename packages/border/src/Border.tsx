import React from 'react';
import { BorderContent, BorderRoot } from './components';
import { IBorderProps } from './types';

/**
 * Border component can be used to highlight border of a single component
 * or a collection of them. You can add a descriptor inside the border at various
 * positioning.
 */
const Border = React.forwardRef<HTMLDivElement, IBorderProps>((props, ref) => {
  const { children, className, content, ...rest } = props;
  return (
    <BorderRoot ref={ref} role="border" className={className} {...rest}>
      {content && <BorderContent {...rest}>{content}</BorderContent>}
      {children}
    </BorderRoot>
  );
});

Border.defaultProps = {
  density: '1px',
  positioning: 'top-left',
  shade: 500,
  sharp: false,
  tone: 'neutral',
  variant: 'solid',
};

export { Border };
