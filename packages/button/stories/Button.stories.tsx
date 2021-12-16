import React from 'react';
import { styled } from '@tidy-ui/theme';
import { GearIcon } from '@tidy-ui/icons';

import { Button } from '../src';

export default {
  component: Button,
  title: 'Button',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Button text="neutral" appearance="basic" kind="neutral" />
    <Button text="primary" appearance="basic" kind="primary" />
    <Button text="secondary" appearance="basic" kind="secondary" />
    <Button text="info" appearance="basic" kind="info" />
    <Button text="success" appearance="basic" kind="success" />
    <Button text="warning" appearance="basic" kind="warning" />
    <Button text="danger" appearance="basic" kind="danger" />
  </Container>
);

export const outlined = () => (
  <Container>
    <Button text="neutral" appearance="outlined" kind="neutral" />
    <Button text="primary" appearance="outlined" kind="primary" />
    <Button text="secondary" appearance="outlined" kind="secondary" />
    <Button text="info" appearance="outlined" kind="info" />
    <Button text="success" appearance="outlined" kind="success" />
    <Button text="warning" appearance="outlined" kind="warning" />
    <Button text="danger" appearance="outlined" kind="danger" />
  </Container>
);

export const filled = () => (
  <Container>
    <Button text="neutral" appearance="filled" kind="neutral" />
    <Button text="primary" appearance="filled" kind="primary" />
    <Button text="secondary" appearance="filled" kind="secondary" />
    <Button text="info" appearance="filled" kind="info" />
    <Button text="success" appearance="filled" kind="success" />
    <Button text="warning" appearance="filled" kind="warning" />
    <Button text="danger" appearance="filled" kind="danger" />
  </Container>
);

export const size = () => (
  <Container>
    <Column>
      <Button text="size-xxs" appearance="basic" kind="neutral" size="xxs" />
      <Button text="size-xs" appearance="basic" kind="info" size="xs" />
      <Button text="size-sm" appearance="basic" kind="success" size="sm" />
      <Button text="size-md" appearance="basic" kind="warning" size="md" />
      <Button text="size-lg" appearance="basic" kind="danger" size="lg" />
      <Button text="size-xl" appearance="basic" kind="secondary" size="xl" />
      <Button text="size-xxl" appearance="basic" kind="primary" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="filled" kind="neutral" size="xxs" />
      <Button text="size-xs" appearance="filled" kind="info" size="xs" />
      <Button text="size-sm" appearance="filled" kind="success" size="sm" />
      <Button text="size-md" appearance="filled" kind="warning" size="md" />
      <Button text="size-lg" appearance="filled" kind="danger" size="lg" />
      <Button text="size-xl" appearance="filled" kind="secondary" size="xl" />
      <Button text="size-xxl" appearance="filled" kind="primary" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="outlined" kind="neutral" size="xxs" />
      <Button text="size-xs" appearance="outlined" kind="info" size="xs" />
      <Button text="size-sm" appearance="outlined" kind="success" size="sm" />
      <Button text="size-md" appearance="outlined" kind="warning" size="md" />
      <Button text="size-lg" appearance="outlined" kind="danger" size="lg" />
      <Button text="size-xl" appearance="outlined" kind="secondary" size="xl" />
      <Button text="size-xxl" appearance="outlined" kind="primary" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="filled" kind="neutral" size="xxs" loading />
      <Button text="size-xs" appearance="filled" kind="info" size="xs" loading />
      <Button text="size-sm" appearance="filled" kind="success" size="sm" loading />
      <Button text="size-md" appearance="filled" kind="warning" size="md" loading />
      <Button text="size-lg" appearance="filled" kind="danger" size="lg" loading />
      <Button text="size-xl" appearance="filled" kind="secondary" size="xl" loading />
      <Button text="size-xxl" appearance="filled" kind="primary" size="xxl" loading />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="outlined" kind="neutral" size="xxs" loading />
      <Button text="size-xs" appearance="outlined" kind="info" size="xs" loading />
      <Button text="size-sm" appearance="outlined" kind="success" size="sm" loading />
      <Button text="size-md" appearance="outlined" kind="warning" size="md" loading />
      <Button text="size-lg" appearance="outlined" kind="danger" size="lg" loading />
      <Button text="size-xl" appearance="outlined" kind="secondary" size="xl" loading />
      <Button text="size-xxl" appearance="outlined" kind="primary" size="xxl" loading />
    </Column>
  </Container>
);

export const hero = () => (
  <Container>
    <Button text="hero" appearance="hero" kind="success" />
  </Container>
);

export const others = () => (
  <Container>
    <Button text="uppercase" appearance="filled" kind="primary" uppercase />
    <Button text="disabled" appearance="filled" kind="secondary" disabled />
    <Button text="full width" appearance="outlined" kind="primary" fullWidth />
    <Button text="Settings" appearance="filled" icon={<GearIcon />} />
  </Container>
);
