import { keyframes } from 'styled-components';
import { color, css, hsla, ITheme } from '@tidy-ui/commons';
import { IProgressProps } from './types';

/** @internal */
const frameAnimation = (props: ITheme) => {
  return keyframes`
    from {
      background-color: ${props.theme.isDark ? hsla(color.gray[700]) : hsla(color.gray[300])};
    }
    to {
      background-color: ${props.theme.isDark ? hsla(color.gray[700], 0.2) : hsla(color.gray[200], 0.6)};
    }
  `;
};

const commonStyles = css<IProgressProps>`
  ${({ theme: { palette }, tone, value }) => css`
    width: ${value}%;
    height: 100%;
    background-color: ${palette[tone!][500]};
    transition-property: all;
    transition-duration: 300ms;
  `}
`;

/** @internal */
const stripAnimation = () => {
  return keyframes`
    0% {
      background-position: 1em 0em;
    }
    100% {
      background-position: 0em 0em;
    }
  `;
};

const stripes = css<IProgressProps>`
  ${commonStyles}
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
  background-size: 1em 1em;
  animation: 1s linear 0s infinite normal none running ${stripAnimation};
`;

const solid = css<IProgressProps>`
  ${commonStyles}
`;

/** @internal */
const indeterminateAnimation = () => {
  return keyframes`
    0% {
      left: -40%;
    }
    100% {
      left: 100%;
    }
  `;
};

const indeterminate = css<IProgressProps>`
  ${commonStyles}
  ${({ theme: { palette }, tone }) => css`
    background-image: linear-gradient(to right, transparent 0%, ${palette[tone!][500]} 50%, transparent 100%);
    position: absolute;
    will-change: left;
    min-width: 50%;
    animation: 1s ease 0s infinite normal none running ${indeterminateAnimation};
  `}
`;

export { frameAnimation, indeterminate, solid, stripes };
