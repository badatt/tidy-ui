import React from 'react';
import { IIconProps } from '@tidy-ui/types';

export default (props: IIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    focusable={false}
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {props.outlined ? (
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    ) : (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    )}
  </svg>
);
