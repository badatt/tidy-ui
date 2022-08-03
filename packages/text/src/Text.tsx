import React, { forwardRef } from 'react';
import { LinkIcon, useIdGen } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/theme';
import { ITextProps } from './types';

const Icon = styled(LinkIcon)`
  display: inline-block;
  cursor: pointer;
  height: 0.8em;
  width: 0.8em;
  transform: translate(0, 0.175em) rotate(-45deg);
  opacity: 0.6;
  margin-left: 0.2em;
`;

/**
 * Internal styled text
 *
 * @internal
 */
const TextRoot = styled.div<ITextProps>`
  ${({ theme: { palette, typography }, as, clr, bld, udl, itl, uc, lc, cc, dsb, exd, ctr, tnc }) => css`
    display: block;
    margin: 0;
    font-size: ${typography[as!].fontSize};
    ${!dsb &&
    !clr &&
    css`
      color: ${palette.text.primary};
    `}
    ${!bld &&
    css`
      font-weight: ${typography[as!].fontWeight};
    `}
    letter-spacing: ${typography[as!].letterSpacing};
    line-height: ${typography[as!].lineHeight};
    ${!dsb &&
    clr &&
    css`
      color: ${palette[clr][600]};
    `}
    ${bld &&
    css`
      font-weight: ${typography.fontWeightBold};
    `}
    ${udl &&
    css`
      text-decoration: underline;
    `}
    ${itl &&
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
    ${dsb &&
    css`
      color: ${palette.text.disabled};
    `}
    ${exd &&
    css`
      width: 100%;
    `}
    ${ctr &&
    css`
      text-align: center;
    `}
    ${tnc &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

    &:hover ${Icon} {
      display: inline-block;
    }
  `}
`;

/**
 * Internal Text root
 *
 * @internal
 */
//const TextRoot = ({ children, ...rest }) => <StyledText {...rest}>{children}</StyledText>;

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

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const Text = forwardRef<HTMLDivElement, ITextProps>((props, ref) => {
  const { children, as, ...rest } = props;
  const ele = htmlElement({ as });
  const id = useIdGen(children?.toString());
  console.log({ id });
  return (
    <TextRoot role="text" ref={ref} as={ele} {...rest}>
      {children}
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(ele) && <Icon />}
    </TextRoot>
  );
});

Text.defaultProps = {
  as: 'body2',
  bld: false,
  cc: false,
  ctr: false,
  dsb: false,
  exd: false,
  itl: false,
  lc: false,
  tnc: false,
  uc: false,
  udl: false,
};

export { Text };
