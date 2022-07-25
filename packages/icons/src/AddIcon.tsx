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
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);
