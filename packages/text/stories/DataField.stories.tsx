import React from 'react';
import { CheckCircleIcon, EyeIcon, GearIcon } from '@tidy-ui/icons';
import { styled } from '@tidy-ui/theme';
import { DataField } from '../src';

export default {
  component: DataField,
  title: 'Components/Text/DataField',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 16px;
  }
`;

export const basic = () => (
  <Container>
    <Column>
      <DataField lbl="default label" val="default value" />
    </Column>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <Column>
      <DataField clr="major" lbl="major color" val="major color value" />
      <DataField clr="minor" lbl="minor color" val="minor color value" />
      <DataField clr="success" lbl="success color" val="success color value" />
      <DataField clr="info" lbl="info color" val="info color value" />
      <DataField clr="warning" lbl="warning color" val="warning color value" />
      <DataField clr="danger" lbl="danger color" val="danger color value" />
      <DataField clr="neutral" lbl="neutral color" val="default(neutral) color" />
    </Column>
  </Container>
);

export const accentVariants = () => (
  <Container>
    <Column>
      <DataField lbl="major(default) accent" val="major accent value" />
      <DataField acc="minor" lbl="minor accent" val="minor accent value" />
      <DataField acc="success" lbl="success accent" val="success accent value" />
      <DataField acc="info" lbl="info accent" val="info accent value" />
      <DataField acc="warning" lbl="warning accent" val="warning accent value" />
      <DataField acc="danger" lbl="danger accent" val="danger accent value" />
      <DataField acc="neutral" lbl="neutral accent" val="neutral accent value" />
    </Column>
  </Container>
);

export const withIcon = () => (
  <Container>
    <Column>
      <DataField ico={<GearIcon />} lbl="settings icon" val="settings icon value" />
      <DataField ico={<EyeIcon />} lbl="settings icon" acc="major" val="major accent value" />
      <DataField ico={<CheckCircleIcon />} lbl="success icon" acc="success" clr="success" val="success color value" />
    </Column>
  </Container>
);

export const others = () => (
  <Container>
    <Column>
      <DataField bld acc="minor" lbl="minor accent" val="minor accent bold value" />
      <DataField udl acc="success" lbl="success accent" val="success accent underline value" />
      <DataField itl acc="info" lbl="info accent" val="info accent italicized value" />
      <DataField dsb acc="warning" lbl="warning accent" val="warning accent disabled value" />
    </Column>
  </Container>
);
