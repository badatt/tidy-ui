import React from 'react';
import { applyStandardOverrideStyles, css, devices, styled } from '@tidy-ui/commons';
import { IContainerProps } from './types';

const ContainerRoot = styled.div<IContainerProps>`
  ${({
    theme: {
      layout: { screens },
    },
    isFixed,
    maxWidth,
    gutter,
  }) => css`
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    ${maxWidth &&
    css`
      max-width: ${screens[maxWidth].breakpoint}px;
    `}
    ${gutter &&
    css`
      padding: 0 ${gutter};
    `}
    ${isFixed &&
    css`
      ${devices.mobile} {
        max-width: ${screens.xs.breakpoint}px;
      }
      ${devices.tablet} {
        max-width: ${screens.sm.breakpoint}px;
      }
      ${devices.laptop} {
        max-width: ${screens.md.breakpoint}px;
      }
      ${devices.desktop} {
        max-width: ${screens.lg.breakpoint}px;
      }
      ${devices.tv} {
        max-width: ${screens.xl.breakpoint}px;
      }
    `}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Container is a wrapped div element that can responsively contain enclosed elements.
 * This can be usually used as page root component
 */
const Container = React.forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
  const { children, ...rest } = props;
  console.log(rest);
  return (
    <ContainerRoot ref={ref} role="main" {...rest}>
      {children}
    </ContainerRoot>
  );
});

Container.defaultProps = {
  gutter: '1.5rem',
  height: '100%',
  isFixed: false,
};

Container.displayName = 'Container';

export { Container };
