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
    noGutters,
  }) => css`
    margin-left: auto;
    margin-right: auto;
    display: block;
    box-sizing: border-box;
    ${maxWidth &&
    css`
      max-width: ${screens[maxWidth].minWidth}px;
    `}
    ${!noGutters &&
    css`
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `}
    ${devices.mobile} {
      ${fixed &&
      css`
        max-width: ${screens.xs.minWidth}px;
      `}
    }
    ${devices.tablet} {
      ${fixed &&
      css`
        max-width: ${screens.sm.minWidth}px;
      `}
    }
    ${devices.laptop} {
      ${fixed &&
      css`
        max-width: ${screens.md.minWidth}px;
      `}
    }
    ${devices.desktop} {
      ${fixed &&
      css`
        max-width: ${screens.lg.minWidth}px;
      `}
    }
    ${devices.tv} {
      ${fixed &&
      css`
        max-width: ${screens.xl.minWidth}px;
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
  noGutters: false,
};

export { Container };
