import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { frameAnimation, indeterminate, solid, stripes } from './styles';
import { IProgressProps } from './types';

const sizeScale = {
  lg: 1.5,
  md: 1,
  sm: 0.85,
  xl: 2,
  xs: 0.7,
  xxl: 2.5,
  xxs: 0.5,
};

const ProgressRoot = styled.div<IProgressProps>`
  ${({ girth }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
    animation: 0.8s linear 0s infinite alternate none running ${frameAnimation};
  `}
  height: 0.4em;
  width: 100%;
  overflow: hidden;
  position: relative;
  ${applyStandardOverrideStyles}
`;

const ProgressBar = styled.div<IProgressProps>`
  ${({ variant }) => css`
    ${variant === 'striped' && stripes}
    ${variant === 'solid' && solid}
    ${variant === 'indeterminate' && indeterminate}
  `}
`;

export { ProgressBar, ProgressRoot };
