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
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
};
