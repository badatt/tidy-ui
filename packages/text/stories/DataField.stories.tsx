import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text, DataField } from '../src';
import { Tone } from '@tidy-ui/types';

export default {
  component: DataField,
  title: 'Presentation/Text/DataField',
};

const Column = styled.div`
  & > * {
    margin-bottom: 16px;
  }
`;

export const basic = () => <DataField lbl="default label" val="default value" />;

export const tones = () => (
  <Column>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <DataField tone={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
      ))}
  </Column>
);

export const accents = () => (
  <Column>
    {Object.keys(Tone)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <DataField acc={Tone[v]} lbl={`${Tone[v]} color`} val={`${Tone[v]} color value`} />
      ))}
  </Column>
);

export const disabled = () => (
  <Column>
    <DataField dsb lbl="warning accent" val="warning accent disabled value" />
  </Column>
);

export const customElements = () => (
  <Column>
    <DataField
      lbl={
        <Text v="caption" uc udl>
          custom label
        </Text>
      }
      val={<Text v="subtitle2">custom val</Text>}
    />
  </Column>
);

export const customMargin = () => (
  <>
    <DataField acc="neutral" lbl="default label" val="default value" mgn="0 0 2rem 0" />
    <DataField acc="neutral" lbl="default label" val="default value" />
  </>
);
