import { css, styled } from '@tidy-ui/commons';
import { IDataFieldProps, ITextProps, TVariant } from './types';

const TextLink = styled.a<ITextProps>`
  display: none;
  cursor: pointer;
  opacity: 0.6;
  margin-left: 0.2em;
  height: 0.9em;
  width: 0.9em;
  transform: translate(0, 0.175em) rotate(-45deg);
`;

/**
 * Internal styled text
 *
 * @internal
 */
const TextRoot = styled.div<ITextProps>`
  ${({
    theme: { palette, font, typography, isDark },
    v,
    tone,
    bld,
    udl,
    itl,
    uc,
    lc,
    cc,
    dsb,
    exd,
    ctr,
    mgn,
    tnc,
    stk,
  }) => css`
    display: block;
    font-size: ${typography[v!].fontSize};
    letter-spacing: ${typography[v!].letterSpacing};
    line-height: ${typography[v!].lineHeight};

    ${bld
      ? css`
          font-weight: ${font.bold};
        `
      : css`
          font-weight: ${typography[v!].fontWeight};
        `}

    ${mgn
      ? css`
          margin: ${mgn};
        `
      : css`
          margin-bottom: ${typography[v!].marginBottom};
        `}
    
    ${!dsb &&
    tone &&
    css`
      color: ${isDark ? palette[tone][500] : palette[tone][600]};
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

    ${stk &&
    css`
      text-decoration: line-through;
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
const htmlElement = (props: ITextProps): TVariant => {
  switch (props.v) {
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
  ${({ mgn }) =>
    css`
      margin: ${mgn};
    `}
`;

/**
 * Internal DD component
 *
 * @internal
 */
const DD = styled.dd<IDataFieldProps>`
  ${({ theme: { palette }, acc, mgn }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    color: ${palette.text.secondary};
    margin-bottom: ${mgn && '0.5rem'};
    ${acc &&
    css`
      &::before {
        content: '';
        height: 0.8em;
        width: 0.125rem;
        margin-right: 0.25rem;
        background-color: ${palette[acc][600]};
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
  ${({ theme: { palette, isDark }, tone, dsb, acc }) => css`
    ${!dsb &&
    !tone &&
    css`
      color: ${palette.text.primary};
    `}
    ${!dsb &&
    tone &&
    css`
      color: ${isDark ? palette[tone][500] : palette[tone][600]};
    `}
    ${dsb &&
    css`
      color: ${palette.text.disabled};
    `}
    ${acc &&
    css`
      margin-left: 0.375rem;
    `}
  `}
`;

export { DD, DL, DT, htmlElement, TextLink, TextRoot };
