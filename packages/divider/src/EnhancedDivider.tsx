import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IEnhancedDividerProps } from './types';

const DividerRoot = styled.div<IEnhancedDividerProps>`
  ${({ margin }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    margin: ${margin} 0;
  `}
`;

const Separator = styled.hr<IEnhancedDividerProps>`
  ${({ theme: { palette }, tone, shade, density, variant }) => css`
    border-color: ${palette[tone!][shade!]};
    border-width: 0px 0px ${density};
    border-style: ${variant};
    flex-grow: 1;
  `}
`;

const Content = styled.div<IEnhancedDividerProps>`
  ${({ justify }) => css`
    ${justify === 'center' &&
    css`
      padding: 0 8px;
    `}
    ${justify !== 'center' &&
    (justify === 'start'
      ? css`
          padding: 0 8px 0 0;
        `
      : css`
          padding: 0 0 0 8px;
        `)}
  `}
`;

/**
 * Enhanced Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, with additional content support, powered by various styles (with theming) and settings
 */
const EnhancedDivider = forwardRef<HTMLHRElement, IEnhancedDividerProps>((props, ref) => {
  const { children, className, justify, ...rest } = props;
  return (
    <DividerRoot ref={ref} className={className} role="separator" {...rest}>
      {['center', 'end'].includes(justify!) && <Separator role="separator" {...rest} />}
      {children && (
        <Content role="separator" justify={justify} {...rest}>
          {children}
        </Content>
      )}
      {['center', 'start'].includes(justify!) && <Separator role="separator" {...rest} />}
    </DividerRoot>
  );
});

EnhancedDivider.defaultProps = {
  density: 'thin',
  justify: 'center',
  margin: '1rem',
  shade: 500,
  tone: 'neutral',
  variant: 'solid',
};

export { EnhancedDivider };
