import { keyframes } from 'styled-components';
import { applyStandardOverrideStyles, color, css, hsla, ITheme, styled } from '@tidy-ui/commons';
import { circleStyle, rectangleStyle, textStyle } from './styles';
import { IFrameProps } from './types';

/**
 * Creates a blink effect
 *
 * @internal
 */
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

const FrameRoot = styled.div<IFrameProps>`
  display: flex;
  height: 100%;
  width: 100%;
  ${({ isLoaded, variant }) => css`
    ${!isLoaded &&
    css`
      animation: 0.8s linear 0s infinite alternate none running ${frameAnimation};
    `}
    ${variant === 'circle' && circleStyle}
    ${variant === 'line' && textStyle}
    ${!variant && rectangleStyle}
  `}
  ${applyStandardOverrideStyles}
`;

export { FrameRoot };
