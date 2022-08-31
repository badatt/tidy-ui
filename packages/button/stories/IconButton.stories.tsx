import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { IconButton } from '../src';

export default {
  component: IconButton,
  title: 'Presentation/Button/IconButton',
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
    <IconButton icon={<Icon.Add />}>Add</IconButton>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <IconButton icon={<Icon.AddCircle />} tone="major">
      Major
    </IconButton>
    <IconButton icon={<Icon.Cancel />} tone="minor">
      Minor
    </IconButton>
    <IconButton icon={<Icon.Close />} tone="neutral">
      Neutral
    </IconButton>
    <IconButton icon={<Icon.Info />} tone="info">
      Info
    </IconButton>
    <IconButton icon={<Icon.CheckCircle />} tone="success">
      Success
    </IconButton>
    <IconButton icon={<Icon.Warning />} tone="warning">
      Warning
    </IconButton>
    <IconButton icon={<Icon.Dangerous />} tone="danger">
      Danger
    </IconButton>
  </Container>
);

export const placement = () => (
  <Container>
    <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
    <IconButton icon={<Icon.AddCircle />} placement="right">
      Right
    </IconButton>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <IconButton icon={<Icon.AddCircle />} size="xxs">
        Xxs
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="xs">
        Xs
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="sm">
        Sm
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="md">
        Md
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="lg">
        Lg
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="xl">
        Xl
      </IconButton>
      <IconButton icon={<Icon.AddCircle />} size="xxl">
        Xxl
      </IconButton>
    </Column>
  </Container>
);

export const types = () => (
  <Container>
    <IconButton icon={<Icon.AddCircle />} variant="primary">
      Primary
    </IconButton>
    <IconButton icon={<Icon.Close />} variant="outlined">
      Outlined
    </IconButton>
  </Container>
);

export const disabled = () => (
  <Container>
    <IconButton icon={<Icon.Add />} disabled>
      Disabled
    </IconButton>
  </Container>
);

export const iconOnly = () => (
  <Container>
    <Column>
      <IconButton icon={<Icon.Add />} iconOnly size="xxs" />
      <IconButton icon={<Icon.Add />} iconOnly size="xs" />
      <IconButton icon={<Icon.Add />} iconOnly size="sm" />
      <IconButton icon={<Icon.Add />} iconOnly size="md" />
      <IconButton icon={<Icon.Add />} iconOnly size="lg" />
      <IconButton icon={<Icon.Add />} iconOnly size="xl" />
      <IconButton icon={<Icon.Add />} iconOnly size="xxl" />
    </Column>
  </Container>
);
