import { color, css, hsla, styled } from '../../commons/src';
import { Text } from '../../text/src';
import { FlexBox, FlexItem } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

const StyledFlexBox = styled(FlexBox)<IFlexBoxProps>`
  overflow: auto;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.amber[900], 0.2)};
          color: ${hsla(color.amber[300])};
        `
      : css`
          background-color: ${hsla(color.amber[100], 0.8)};
          color: ${hsla(color.amber[900])};
        `}
`;

const StyledFlexItem = styled(FlexItem)<IFlexItemProps>`
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.red[900], 0.2)};
          border: 1px dashed ${hsla(color.red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(color.red[100], 0.8)};
          border: 1px dashed ${hsla(color.red[400], 0.5)};
        `}
`;

const StyledText = styled(Text.H3)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const StyledTextLabel = styled(Text.Caption)`
  position: absolute;
  transform: translate(-50%, 100%);
  top: 50%;
  left: 50%;
`;

export { StyledFlexBox, StyledFlexItem, StyledText, StyledTextLabel };
