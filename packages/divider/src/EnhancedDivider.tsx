import React from 'react';
import { Content, EnhancedDividerRoot, Separator } from './components';
import { IEnhancedDividerProps } from './types';

/**
 * Enhanced Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, with additional content support, powered by various styles (with theming) and settings
 */
const EnhancedDivider = React.forwardRef<HTMLHRElement, IEnhancedDividerProps>((props, ref) => {
  const { children, className, justify, ...rest } = props;
  const { tone, shade, density, variant } = rest;
  return (
    <EnhancedDividerRoot ref={ref} className={className} role="separator" {...rest}>
      {['center', 'end'].includes(justify!) && <Separator role="separator" {...{ density, shade, tone, variant }} />}
      {children && (
        <Content role="separator" justify={justify}>
          {children}
        </Content>
      )}
      {['center', 'start'].includes(justify!) && <Separator role="separator" {...{ density, shade, tone, variant }} />}
    </EnhancedDividerRoot>
  );
});

EnhancedDivider.defaultProps = {
  density: 'thin',
  justify: 'center',
  margin: '0.5rem',
  tone: 'neutral',
  variant: 'solid',
};

EnhancedDivider.displayName = 'EnhancedDivider';

export { EnhancedDivider };
