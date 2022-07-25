import React from 'react';

import { css, styled } from '@tidy-ui/theme';

import { ITextProps } from './types';

const StyledText = styled.div<ITextProps>`
  ${({ theme: { palette, typography }, as, color, b, u, i, uc, lc, cc, disable, stretch, center, truncate }) => css`
    margin: 0;
    font-size: ${typography[as!].fontSize};
    ${!disable &&
    !color &&
    css`
      color: ${palette.text.primary};
    `}
    ${!b &&
    css`
      font-weight: ${typography[as!].fontWeight};
    `}
    letter-spacing: ${typography[as!].letterSpacing};
    line-height: ${typography[as!].lineHeight};
    ${!disable &&
    color &&
    css`
      color: ${palette[color][600]};
    `}
    ${b &&
    css`
      font-weight: ${typography.fontWeightBold};
    `}
    ${u &&
    css`
      text-decoration: underline;
    `}
    ${i &&
    css`
      font-style: italic;
    `}
    ${uc &&
    css`
      text-transform: uppercase;
    `}
    ${lc &&
    css`
      text-transform: lowercase;
    `}
    ${cc &&
    css`
      text-transform: capitalize;
    `}
    ${disable &&
    css`
      color: ${palette.text.disabled};
    `}
    ${stretch &&
    css`
      width: 100%;
    `}
    ${center &&
    css`
      text-align: center;
    `}
    ${truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  `}
`;

const TextRoot = ({ children, ...rest }) => <StyledText {...rest}>{children}</StyledText>;

const htmlElement = (props: ITextProps) => {
  switch (props.as) {
    case 'h1':
    case 'hero':
      return 'h1';
    case 'h2':
    case 'title1':
      return 'h2';
    case 'h3':
    case 'title2':
      return 'h3';
    case 'h4':
    case 'subtitle1':
      return 'h4';
    case 'h5':
    case 'subtitle2':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'p':
    case 'body1':
    case 'body2':
      return 'p';
    case 'span':
      return 'span';
    case 'code':
      return 'code';
    default:
      return 'span';
  }
};

const Text = React.forwardRef<HTMLDivElement, ITextProps>((props, ref) => {
  const { children, as, ...rest } = props;
  return (
    <TextRoot role="text" ref={ref} as={htmlElement({ as })} {...rest}>
      {children}
    </TextRoot>
  );
});

Text.defaultProps = {
  as: 'body2',
};

export { Text };
