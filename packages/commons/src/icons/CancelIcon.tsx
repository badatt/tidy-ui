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
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
      ) : (
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
      )}
    </svg>
  );
};
