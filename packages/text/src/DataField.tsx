import React, { forwardRef } from 'react';
import { DataFieldIcon, DD, DL, DT } from './components';
import { IDataFieldProps } from './types';

/**
 * DataField is used for representing a label-value pairs on a page.
 * Powered by various styles (with theming) and settings
 *
 */
const DataField = forwardRef<HTMLDivElement, IDataFieldProps>((props, ref) => {
  const { lbl, val, ico, ...rest } = props;
  return (
    <DL ref={ref} role="data-field">
      <DD {...rest} ico={ico}>
        {ico && <DataFieldIcon {...props}>{ico}</DataFieldIcon>}
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
