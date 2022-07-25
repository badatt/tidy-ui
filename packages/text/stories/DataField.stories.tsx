import React from 'react';

import { CheckCircleIcon, EyeIcon, GearIcon } from '@tidy-ui/icons';
import { styled } from '@tidy-ui/theme';

import { DataField } from '../src';

export default {
  component: DataField,
  title: 'DataField',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Column>
      <DataField label="major(default) accent" value="major accent value" />
      <DataField accent="minor" label="minor accent" value="minor accent value" />
      <DataField accent="success" label="success accent" value="success accent value" />
      <DataField accent="info" label="info accent" value="info accent value" />
      <DataField accent="warning" label="warning accent" value="warning accent value" />
      <DataField accent="danger" label="danger accent" value="danger accent value" />
      <DataField accent="neutral" label="neutral accent" value="neutral accent value" />
    </Column>
    <Column>
      <DataField color="major" accent="major" label="major(default) accent" value="major color value" />
      <DataField color="minor" accent="minor" label="minor accent" value="minor color value" />
      <DataField color="success" accent="success" label="success accent" value="success color value" />
      <DataField color="info" accent="info" label="info accent" value="info color value" />
      <DataField color="warning" accent="warning" label="warning accent" value="warning color value" />
      <DataField color="danger" accent="danger" label="danger accent" value="danger color value" />
      <DataField label="neutral accent" accent="neutral" value="default(neutral) color" />
    </Column>
  </Container>
);

export const withIcon = () => (
  <Container>
    <Column>
      <DataField icon={<GearIcon />} label="settings icon" value="settings icon value" />
      <DataField icon={<EyeIcon />} label="settings icon" accent="major" value="major accent value" />
      <DataField
        icon={<CheckCircleIcon />}
        label="success icon"
        accent="success"
        color="success"
        value="success color value"
      />
    </Column>
  </Container>
);

export const transforms = () => (
  <Container>
    <Column>
      <DataField b accent="minor" label="minor accent" value="minor accent bold value" />
      <DataField u accent="success" label="success accent" value="success accent underline value" />
      <DataField i accent="info" label="info accent" value="info accent italicized value" />
      <DataField disable accent="warning" label="warning accent" value="warning accent disabled value" />
    </Column>
  </Container>
);
