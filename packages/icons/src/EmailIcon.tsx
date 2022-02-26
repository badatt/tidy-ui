import React from 'react';
import { IIconProps } from './types';

export default (props: IIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    focusable={false}
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
  </svg>
);
