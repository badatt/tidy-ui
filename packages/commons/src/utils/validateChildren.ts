/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

/**
 * Validates if valid allowed children are passed to a component
 *
 * @param {Record<string, any>} props props of the component
 * @param {string} propName specific prop name
 * @param {string} componentName the component name
 * @param {string[]} allowed list of allowed children component nodes
 * @returns {any} validation errors
 */
const validateChildren = (
  props: {
    [key: string]: any;
  },
  propName: string,
  componentName: string,
  allowed: string[],
): any => {
  const errorMessage = `${componentName} accepts only ${allowed} as children`;
  const childrenNames = React.Children.map(props[propName], (c) => c.type.displayName);
  if (childrenNames.length == 0 || !childrenNames.every((c) => allowed.includes(c))) {
    return new Error(`Invalid nodes. ${errorMessage}`);
  }
  return null;
};

export default validateChildren;
