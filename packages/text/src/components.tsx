import { LinkIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/commons';
import { IDataFieldProps, ITextProps, TTextTypes } from './types';

const TextLinkIcon = styled(LinkIcon)`
  height: 0.8em;
  width: 0.8em;
  transform: translate(0, 0.175em) rotate(-45deg);
`;

const TextLink = styled.a<ITextProps>`
  display: none;
  cursor: pointer;
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

    &:hover ${TextLink} {
      display: inline-block;
    }
  `}
`;

/**
 * Resolves html tag
 *
 * @param {ITextProps} props props
 * @returns {string} html element
 */
const htmlElement = (props: ITextProps): TTextTypes => {
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
      return 'p';
  }
};

/**
 * Internal DL component
 *
 * @internal
 */
const DL = styled.div<IDataFieldProps>`
  margin-bottom: 1rem;
`;

/**
 * Internal DD component
 *
 * @internal
 */
const DD = styled.dd<IDataFieldProps>`
  ${({ theme: { palette, typography }, acc, ico }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    font-weight: ${typography.fontWeightBold};
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${palette.text.secondary};
    letter-spacing: 0.05em;
    ${!ico &&
    css`
      &::before {
        content: '';
        height: 0.625rem;
        width: 2px;
        margin-right: 0.25rem;
        background-color: ${palette[acc!][600]};
      }
    `}
  `}
`;

/**
 * Internal DT component
 *
 * @internal
 */
const DT = styled.dt<IDataFieldProps>`
  ${({ theme: { palette, typography }, clr, bld, udl, itl, dsb, ico }) => css`
    ${!dsb &&
    !clr &&
    css`
      color: ${palette.text.primary};
    `}
    ${!ico &&
    css`
      margin-left: 0.125rem;
    `}
    font-size: 0.875rem;
    ${!bld &&
    css`
      font-weight: ${typography.fontWeightMedium};
    `}
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
    ${dsb &&
    css`
      color: ${palette.text.disabled};
    `}
    ${ico &&
    css`
      margin-left: 0.875rem;
    `}
  `}
`;

/**
 * Internal DataFieldIcon component
 *
 * @internal
 */
const DataFieldIcon = styled.i<IDataFieldProps>`
  ${({ theme: { palette }, acc }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 0.25rem;
    color: ${palette[acc!][600]};
  `}
`;

export { DataFieldIcon, DD, DL, DT, htmlElement, TextLink, TextLinkIcon, TextRoot };
