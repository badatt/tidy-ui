import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { EnhancedDivider } from './EnhancedDivider';
import { IDividerProps } from './types';

const DividerRoot = styled.hr<IDividerProps>`
  ${({ theme: { palette }, tone, shade, density, variant, margin, vertical }) => css`
    border-color: ${palette[tone!][shade!]};
    flex-shrink: 0;
    border-style: ${variant};
    ${vertical
      ? css`
          margin: 0 ${margin};
          border-width: 0px ${density} 0px 0px;
        `
      : css`
          border-width: 0px 0px ${density};
          margin: ${margin} 0;
        `}
  `}
`;

/** @internal */
interface DividerComponent extends ForwardRefExoticComponent<IDividerProps & RefAttributes<HTMLDivElement>> {
  /** @internal */
  Enhanced: typeof EnhancedDivider;
}

/**
 * Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, powered by various styles (with theming) and settings
 */
const Divider = forwardRef<HTMLHRElement, IDividerProps>((props, ref) => {
  const { className, ...rest } = props;
  return <DividerRoot ref={ref} className={className} role="separator" {...rest} />;
}) as DividerComponent;

Divider.defaultProps = {
  density: 'thin',
  margin: '0.5rem',
  shade: 500,
  tone: 'neutral',
  variant: 'solid',
  vertical: false,
};

Divider.Enhanced = EnhancedDivider;

export { Divider };
