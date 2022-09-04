import { color, css, hsla, styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/text';

const StackItem = styled.div`
  padding: 3rem;
  position: relative;
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

const StyledText = styled(Text)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export { StackItem, StyledText };
