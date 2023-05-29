import React from 'react';
import { Grid } from '../../grid/src';
import { Text, DataField } from '../src';
import { Tone } from '../../commons/src';

export default {
  component: DataField,
  title: 'Presentation/Text/DataField',
};

export const basic = () => <DataField lbl="default label" val="default value" />;

export const tones = () => (
  <Grid gap={24}>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <Grid.Item>
          <DataField tone={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
        </Grid.Item>
      ))}
  </Grid>
);

export const accents = () => (
  <Grid gap={24}>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <Grid.Item>
          <DataField acc={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
        </Grid.Item>
      ))}
  </Grid>
);

export const disabled = () => <DataField dsb lbl="warning accent" val="warning accent disabled value" />;

export const customElements = () => (
  <DataField
    lbl={
      <Text.caption uc udl>
        custom label
      </Text.caption>
    }
    val={<Text.subtitle2>custom val</Text.subtitle2>}
  />
);
