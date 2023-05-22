import React from 'react';
import { BorderContent, BorderRoot } from './components';
import { IBorderProps } from './types';

/**
 * Border component can be used to highlight border of a single component
 * or a collection of them. You can add a descriptor inside the border at various
 * positioning.
 */
const Border = React.forwardRef<HTMLDivElement, IBorderProps>((props, ref) => {
  const { children, ele, content, ...rest } = props;
  const { align, positioning } = rest;
  return (
    <BorderRoot ref={ref} role="presentation" {...rest}>
      {content && <BorderContent {...{ align, positioning }}>{content}</BorderContent>}
      {ele ? React.cloneElement(ele, {}, children) : children}
    </BorderRoot>
  );
});

Border.defaultProps = {
  density: '1px',
  isSharp: false,
  padding: '1rem',
  positioning: 'top-left',
  tone: 'neutral',
  variant: 'solid',
};

Border.displayName = 'Border';

export { Border };
