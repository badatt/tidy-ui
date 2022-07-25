import { css, styled } from '@tidy-ui/theme';
import { IPalette } from '@tidy-ui/types';
import { IMessageProps } from './types';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';

const MessageRoot = styled.div<IMessageProps>`
  ${({ stretch }) => css`
    margin-bottom: 1rem;
    width: ${stretch ? '100%' : 'fit-content'};
    position: relative;
  `}
`;

const closeButtonColor = (isDark: boolean, palette: IPalette, color: string) => {
  return isDark ? palette[color][400] : palette[color][600];
};

const CloseButton = styled.i<IMessageProps>`
  ${({ theme: { palette, isDark }, color, outlined }) => css`
    height: 1rem;
    width: 1rem;
    position: absolute;
    top: 24px;
    right: 2px;
    color: ${palette[color!][50]};
    cursor: pointer;
    ${outlined
      ? css`
          color: ${closeButtonColor(isDark, palette, color!)};
        `
      : css`
          color: ${palette[color!][50]};
        `}
  `}
`;

const MessageLabel = styled.div<IMessageProps>`
  ${({ theme: { layout, typography }, sharp, outlined }) => css`
    display: flex;
    align-items: center;
    gap: 2px;
    border-top-left-radius: ${!sharp && layout.radius};
    border-top-right-radius: ${!sharp && layout.radius};
    width: fit-content;
    padding: 0.25rem 1rem;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: ${typography.fontWeightBold};
    ${outlined ? outlinedLabel : filledLabel}
    svg {
      height: 0.75rem;
      width: 0.75rem;
    }
  `}
`;

const MessageContent = styled.div<IMessageProps>`
  ${({ theme: { layout }, sharp, stretch, noLabel, outlined }) => css`
    padding: 0.75rem 1rem;
    border-radius: ${!sharp && layout.radius};
    ${!noLabel &&
    css`
      border-top-left-radius: 0;
    `}
    width: ${stretch ? '100%' : 'fit-content'};
    ${outlined ? outlinedContent : filledContent}
  `}
`;

const Header = styled.div<IMessageProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.h6.fontSize};
    margin-bottom: 0.25rem;
  `}
`;

export { MessageRoot, CloseButton, MessageContent, Header, MessageLabel };
