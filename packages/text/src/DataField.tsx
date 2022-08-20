import React, { forwardRef } from 'react';
import { DataFieldIcon, DD, DL, DT } from './components';
import { IDataFieldProps } from './types';

/**
 * DataField is used for representing a label-value pairs on a page.
 * Powered by various styles (with theming) and settings
 *
 */
const DataField = forwardRef<HTMLDivElement, IDataFieldProps>((props, ref) => {
  const { className, lbl, val, ico, ...rest } = props;
  return (
    <DL className={className} ref={ref} role="contentinfo">
      <DD {...rest} ico={ico}>
        {ico && <DataFieldIcon {...rest}>{ico}</DataFieldIcon>}
        {lbl}
      </DD>
      <DT {...rest} ico={ico}>
        {val}
      </DT>
    </DL>
  );
});

DataField.defaultProps = {
  acc: 'major',
  bld: false,
  dsb: false,
  itl: false,
  udl: false,
};

export { DataField };
