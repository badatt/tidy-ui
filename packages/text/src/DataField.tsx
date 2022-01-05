import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { IDataFieldProps } from './types';

const DL = styled.dl<IDataFieldProps>`
  margin-bottom: 1rem;
`;

const DD = styled.dd<IDataFieldProps>`
  ${({ theme: { palette, typography }, accent, icon }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    font-weight: ${typography.fontWeightBold};
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${palette.text.secondary};
    letter-spacing: 0.05em;
    ${!icon &&
    css`
      &::before {
        content: '';
        height: 0.625rem;
        width: 2px;
        margin-right: 0.25rem;
        background-color: ${palette[accent!][600]};
      }
    `}
  `}
`;

const DT = styled.dt<IDataFieldProps>`
  ${({ theme: { palette, typography }, color, b, u, i, disable, icon }) => css`
    ${!disable &&
    !color &&
    css`
      color: ${palette.text.primary};
    `}
    ${!icon &&
    css`
      margin-left: 0.125rem;
    `}
    font-size: 0.875rem;
    ${!b &&
    css`
      font-weight: ${typography.fontWeightMedium};
    `}
    ${!disable &&
    color &&
    css`
      color: ${palette[color!][600]};
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
    ${disable &&
    css`
      color: ${palette.text.disabled};
    `}
    ${icon &&
    css`
      margin-left: 0.875rem;
    `}
  `}
`;

const Icon = styled.i<IDataFieldProps>`
  ${({ theme: { palette }, accent }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 0.25rem;
    color: ${palette[accent!][600]};
  `}
`;

const DataField = (props: IDataFieldProps) => {
  const { label, value, icon, ...rest } = props;
  return (
    <DL role="data-field">
      <DD {...rest} icon={icon}>
        {icon && <Icon {...props}>{icon}</Icon>}
        {label}
      </DD>
      <DT {...rest} icon={icon}>
        {value}
      </DT>
    </DL>
  );
};

DataField.defaultProps = {
  accent: 'major',
};

export { DataField };
