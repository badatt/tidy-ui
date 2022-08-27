import React, { forwardRef } from 'react';
import { css, devices, styled } from '@tidy-ui/commons';
import { IContainerProps } from './types';

const ContainerRoot = styled.div<IContainerProps>`
  ${({
    theme: {
      layout: { screens },
    },
    fixed,
    maxWidth,
    gutter,
  }) => css`
    margin-left: auto;
    margin-right: auto;
    display: block;
    box-sizing: border-box;
    ${maxWidth &&
    css`
      max-width: ${screens[maxWidth].breakpoint}px;
    `}
    ${gutter &&
    css`
      padding: 0 ${gutter};
    `}
    ${devices.mobile} {
      ${fixed &&
      css`
        max-width: ${screens.xs.breakpoint}px;
      `}
    }
    ${devices.tablet} {
      ${fixed &&
      css`
        max-width: ${screens.sm.breakpoint}px;
      `}
    }
    ${devices.laptop} {
      ${fixed &&
      css`
        max-width: ${screens.md.breakpoint}px;
      `}
    }
    ${devices.desktop} {
      ${fixed &&
      css`
        max-width: ${screens.lg.breakpoint}px;
      `}
    }
    ${devices.tv} {
      ${fixed &&
      css`
        max-width: ${screens.xl.breakpoint}px;
      `}
    }
  `}
`;

/**
 * Container is a wrapped div element that can responsively contain enclosed elements.
 * This can be usually used as page root component
 */
const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ContainerRoot ref={ref} role="main" {...rest}>
      {children}
    </ContainerRoot>
  );
});

Container.defaultProps = {
  fixed: false,
  gutter: '1.5rem',
};

export { Container };
