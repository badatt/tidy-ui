import React from 'react';
import { Grid, GridItem } from '../../grid/src';
import { Text, DataField } from '../src';
import { Tone } from '../../types/src';

export default {
  component: DataField,
  title: 'Presentation/Text/DataField',
};

export const basic = () => <DataField lbl="default label" val="default value" />;

export const tones = () => (
  <Grid gap={24}>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v) => (
        <GridItem key={v}>
          <DataField tone={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
        </GridItem>
      ))}
  </Grid>
);

export const accents = () => (
  <Grid gap={24}>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <GridItem key={v}>
          <DataField acc={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
        </GridItem>
      ))}
  </Grid>
);

export const disabled = () => <DataField dsb lbl="warning accent" val="warning accent disabled value" />;

export const customElements = () => (
  <DataField
    lbl={
      <Text.Caption uc udl>
        custom label
      </Text.Caption>
    }
    val={<Text.Subtitle2>custom val</Text.Subtitle2>}
  />
);
