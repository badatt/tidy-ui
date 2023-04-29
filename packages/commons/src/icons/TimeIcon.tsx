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
        <>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </>
      ) : (
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z"
        />
      )}
    </svg>
  );
};
