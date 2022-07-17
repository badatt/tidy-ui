import React from 'react';
import { IIconProps } from './types';

export default (props: IIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    focusable={false}
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);
