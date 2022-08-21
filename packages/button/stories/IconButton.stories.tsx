import React from 'react';
import {
  AddCircleIcon,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  CloseIcon,
  DangerousIcon,
  InfoIcon,
  WarningIcon,
} from '@tidy-ui/commons';
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
    <IconButton icon={<AddIcon />}>Add</IconButton>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <IconButton icon={<AddCircleIcon />} tone="major">
      Major
    </IconButton>
    <IconButton icon={<CancelIcon />} tone="minor">
      Minor
    </IconButton>
    <IconButton icon={<CloseIcon />} tone="neutral">
      Neutral
    </IconButton>
    <IconButton icon={<InfoIcon />} tone="info">
      Info
    </IconButton>
    <IconButton icon={<CheckCircleIcon />} tone="success">
      Success
    </IconButton>
    <IconButton icon={<WarningIcon />} tone="warning">
      Warning
    </IconButton>
    <IconButton icon={<DangerousIcon />} tone="danger">
      Danger
    </IconButton>
  </Container>
);

export const placement = () => (
  <Container>
    <IconButton icon={<AddCircleIcon />}>Left</IconButton>
    <IconButton icon={<AddCircleIcon />} placement="right">
      Right
    </IconButton>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <IconButton icon={<AddCircleIcon />} size="xxs">
        Xxs
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="xs">
        Xs
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="sm">
        Sm
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="md">
        Md
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="lg">
        Lg
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="xl">
        Xl
      </IconButton>
      <IconButton icon={<AddCircleIcon />} size="xxl">
        Xxl
      </IconButton>
    </Column>
  </Container>
);

export const types = () => (
  <Container>
    <IconButton icon={<AddCircleIcon />} variant="primary">
      Primary
    </IconButton>
    <IconButton icon={<CloseIcon />} variant="outlined">
      Outlined
    </IconButton>
  </Container>
);

export const disabled = () => (
  <Container>
    <IconButton icon={<AddIcon />} disabled>
      Disabled
    </IconButton>
  </Container>
);

export const iconOnly = () => (
  <Container>
    <Column>
      <IconButton icon={<AddIcon />} iconOnly size="xxs" />
      <IconButton icon={<AddIcon />} iconOnly size="xs" />
      <IconButton icon={<AddIcon />} iconOnly size="sm" />
      <IconButton icon={<AddIcon />} iconOnly size="md" />
      <IconButton icon={<AddIcon />} iconOnly size="lg" />
      <IconButton icon={<AddIcon />} iconOnly size="xl" />
      <IconButton icon={<AddIcon />} iconOnly size="xxl" />
    </Column>
  </Container>
);
