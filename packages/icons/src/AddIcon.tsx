import React, { HTMLAttributes } from 'react';

/**
 * SVG icon
 *
 * @param {HTMLAttributes} props props for icon
 * @returns {JSX.Element} SVG output
 */
export default (props: HTMLAttributes<SVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
};
