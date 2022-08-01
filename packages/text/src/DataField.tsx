import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/theme';
import { IDataFieldProps } from './types';

const DL = styled.div<IDataFieldProps>`
  margin-bottom: 1rem;
`;

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

const Icon = styled.i<IDataFieldProps>`
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

const DataField = forwardRef<HTMLDivElement, IDataFieldProps>((props, ref) => {
  const { lbl, val, ico, ...rest } = props;
  return (
    <DL ref={ref} role="data-field">
      <DD {...rest} ico={ico}>
        {ico && <Icon {...props}>{ico}</Icon>}
        {lbl}
      </DD>
      <DT {...rest} ico={ico}>
        {val}
      </DT>
    </DL>
  );
});

DataField.defaultProps = {
  acc: 'major',
  bld: false,
  dsb: false,
  itl: false,
  udl: false,
};

export { DataField };
