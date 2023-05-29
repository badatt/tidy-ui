import React from 'react';
import { DD, DL, DT } from './components';
import { IDataFieldProps } from './types';

/**
 * DataField is used for representing a label-value pairs on a page.
 * Powered by various styles (with theming) and settings
 *
 */
const DataField = React.forwardRef<HTMLDivElement, IDataFieldProps>((props, ref) => {
  const { className, lbl, val, ...rest } = props;
  const { tone, dsb, acc } = rest;
  return (
    <DL className={className} ref={ref} role="contentinfo" {...rest}>
      <DD {...{ acc }}>{lbl}</DD>
      <DT {...{ acc, dsb, tone }}>{val}</DT>
    </DL>
  );
});

DataField.defaultProps = {};

DataField.displayName = 'DataField';

export { DataField };
