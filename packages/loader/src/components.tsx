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
    font-size: calc(1rem * ${sizeScale[girth!]});
    animation: ${rotate360} 600ms linear infinite;
    width: 1.5em;
    height: 1.5em;
    border-width: 0.125em;
  `}
  border-left-color: transparent !important;
`;

const CircleLoader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  return <Spinner ref={ref} role="loader" {...props} />;
});

/** Ellipses loader */

/** @internal */
const ellipseSizer = (props: ITheme) => keyframes`
  from {
    padding: 0em;
    background-color: ${props.theme.palette.major[500]};
  }
  to {
    padding: 0.6em;
    background-color: ${props.theme.palette.minor[500]};
  }
`;

const EllipsesWrap = styled.div<ILoaderProps>`
  display: flex;
  align-items: center;
  ${({ girth }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
    }
  `}
`;

const EllipseDot = styled.div<ILoaderProps>`
  border-radius: 50%;
  animation: ${ellipseSizer} 600ms infinite linear alternate-reverse;
`;

const EllipsesLoader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  return (
    <EllipsesWrap ref={ref} role="loader" {...props}>
      <div>
        <EllipseDot style={{ animationDelay: '0ms' }} {...props} />
      </div>
      <div>
        <EllipseDot style={{ animationDelay: '200ms' }} {...props} />
      </div>
      <div>
        <EllipseDot style={{ animationDelay: '400ms' }} {...props} />
      </div>
    </EllipsesWrap>
  );
});

/** Pulse loader */

/** @internal */
const pulse = (props: ITheme) => keyframes`
  from {
    transform: scale(0); 
    opacity: 1;
    background-color: ${props.theme.palette.major[500]};
  }
  to {
    transform: scale(1.2); 
    opacity: 0;
    background-color: ${props.theme.palette.minor[500]};
  }
`;

const PulseLoaderWrap = styled.div<ILoaderProps>`
  ${({ girth }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
  `}
  width: 1em;
  height: 1em;
  border-radius: 50%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

const PulseLoader = React.forwardRef<HTMLDivElement, ILoaderProps>((props, ref) => {
  return <PulseLoaderWrap ref={ref} role="loader" {...props} />;
});

export { CircleLoader, EllipsesLoader, LoaderRoot, PulseLoader };
