import { amber, css, hsla, red, styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/presentation';
import { FlexBox, FlexItem } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

const StyledFlexBox = styled(FlexBox)<IFlexBoxProps>`
  overflow: auto;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(amber[900], 0.2)};
          color: ${hsla(amber[300])}; ;
        `
      : css`
          background-color: ${hsla(amber[100], 0.8)};
          color: ${hsla(amber[900])};
        `}
`;

const StyledFlexItem = styled(FlexItem)<IFlexItemProps>`
  position: relative;
  padding: 3rem;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(red[900], 0.2)};
          border: 1px dashed ${hsla(red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(red[100], 0.8)};
          border: 1px dashed ${hsla(red[400], 0.5)};
        `}
`;

const StyledText = styled(Text)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const StyledTextLabel = styled(Text)`
  position: absolute;
  transform: translate(-50%, 100%);
  top: 50%;
  left: 50%;
`;

const Divider = styled.hr<{ margin: string }>`
  margin-top: ${({ margin }) => margin} 0;
`;

export { Divider, StyledFlexBox, StyledFlexItem, StyledText, StyledTextLabel };
