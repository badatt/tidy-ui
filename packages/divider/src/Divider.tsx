import React from 'react';
import { css, styled } from '@tidy-ui/commons';
import { EnhancedDivider } from './EnhancedDivider';
import { IDividerProps } from './types';

const DividerRoot = styled.hr<IDividerProps>`
  ${({ theme: { palette }, align, length, tone, shade, density, variant, margin, vertical }) => css`
    border-color: ${palette[tone!][shade!]};
    flex-shrink: 0;
    border-style: ${variant};
    align-self: ${align};
    ${vertical
      ? css`
          margin: 0 ${margin};
          border-width: 0px ${density} 0px 0px;
          ${length &&
          css`
            height: ${length};
          `}
        `
      : css`
          margin: ${margin} 0;
          border-width: 0px 0px ${density};
          ${length &&
          css`
            width: ${length};
          `}
        `}
  `}
`;

/** @internal */
interface DividerComponent
  extends React.ForwardRefExoticComponent<IDividerProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Enhanced: typeof EnhancedDivider;
}

/**
 * Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, powered by various styles (with theming) and settings
 */
const Divider = React.forwardRef<HTMLHRElement, IDividerProps>((props, ref) => {
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

Divider.displayName = 'Divider';

Divider.Enhanced = EnhancedDivider;

export { Divider };
