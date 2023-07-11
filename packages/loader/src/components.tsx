import React from 'react';
import { keyframes } from 'styled-components';
import { applyStandardOverrideStyles, css, ITheme, styled } from '@tidy-ui/commons';
import { ILoaderProps } from './types';

const sizeScale = {
  lg: 1.5,
  md: 1,
  sm: 0.7,
  xl: 2,
  xs: 0.5,
  xxl: 2.5,
  xxs: 0.3,
};

const LoaderRoot = styled.div<ILoaderProps>`
  ${applyStandardOverrideStyles}
`;

/** Circle loader */

/** @internal */
const rotate360 = (props: ITheme) => keyframes`
  from {
    transform: rotate(0deg);
    border-color: ${props.theme.palette.major[500]};
  }
  to {
    transform: rotate(360deg);
    border-color: ${props.theme.palette.minor[500]};
  }
`;

const Spinner = styled.div<ILoaderProps>`
  transform: translateZ(0);
  background: transparent;
  border-style: solid;
  border-radius: 50%;
  ${({ girth }) => css`
    font-size: calc(1.5rem * ${sizeScale[girth!]});
    animation: ${rotate360} 1s linear infinite;
    width: 1.5em;
    height: 1.5em;
    border-width: 0.125em;
  `}
  border-left-color: transparent !important;
`;

const CircleLoader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  return <Spinner ref={ref} role="loader" {...props}></Spinner>;
});

/** Ellipses loader */

const dotStyle = css<ILoaderProps>`
  ${({ theme: { palette } }) => css`
    width: 0.425em;
    height: 0.425em;
    background-color: ${palette.major[500]};
    border-radius: 50%;
  `}
`;

const Dot1 = styled.span<ILoaderProps>`
  ${dotStyle}
`;
const Dot2 = styled.span<ILoaderProps>`
  ${dotStyle}
`;
const Dot3 = styled.span<ILoaderProps>`
  ${dotStyle}
`;

/** @internal */
const ellipseBlinker = (props: ITheme) => keyframes`
  0% {
    ${Dot1} {
      background-color: ${props.theme.palette.major[200]};
    }
  }

  33% {
    ${Dot2} {
      background-color: ${props.theme.palette.major[200]};
    }

  }

  66% {
    ${Dot3} {
      background-color: ${props.theme.palette.major[200]};
    }
  }

  100% {
    ${Dot1} {
      background-color: ${props.theme.palette.major[200]};
    }
  }
`;

const EllipseWrap = styled.div<ILoaderProps>`
  display: flex;
  align-items: center;
  ${({ girth }) => css`
    animation: ${ellipseBlinker} 1s linear infinite;
    font-size: calc(1.5rem * ${sizeScale[girth!]});
  `}
  gap: 0.075em;
`;

const EllipsesLoader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  return (
    <EllipseWrap ref={ref} role="loader" {...props}>
      <Dot1 {...props} />
      <Dot2 {...props} />
      <Dot3 {...props} />
    </EllipseWrap>
  );
});

export { CircleLoader, EllipsesLoader, LoaderRoot };
