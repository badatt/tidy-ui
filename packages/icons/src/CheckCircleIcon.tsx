import React from 'react';
import { IIconProps } from '@tidy-ui/types';

/**
 * SVG icon
 *
 * @param {IIconProps} props props for icon
 * @returns {JSX.Element} SVG output
 */
export default (props: IIconProps): JSX.Element => {
  const { isOutlined, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      {isOutlined ? (
        <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      ) : (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      )}
    </svg>
  );
};
