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
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      ) : (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      )}
    </svg>
  );
};
