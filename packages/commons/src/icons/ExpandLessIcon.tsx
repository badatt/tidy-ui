import React from 'react';

/**
 * SVG icon
 *
 * @param {React.HTMLAttributes} props props for icon
 * @returns {JSX.Element} SVG output
 */
export default (props: React.HTMLAttributes<SVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>
  );
};
