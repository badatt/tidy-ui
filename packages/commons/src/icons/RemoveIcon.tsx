import React from 'react';

/**
 * SVG icon
 *
 * @param {React.HTMLAttributes} props props for icon
 * @returns {JSX.Element} SVG output
 */
export default (props: React.HTMLAttributes<SVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable={false}
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);
