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
import { styled } from '@tidy-ui/theme';
import { IconButton } from '../src';

export default {
  component: IconButton,
  title: 'Components/Button/IconButton',
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
    <IconButton withIcon={<AddIcon />}>Add</IconButton>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <IconButton withIcon={<AddCircleIcon />} withColor="major">
      major
    </IconButton>
    <IconButton withIcon={<CancelIcon />} withColor="minor">
      minor
    </IconButton>
    <IconButton withIcon={<CloseIcon />} withColor="neutral">
      neutral
    </IconButton>
    <IconButton withIcon={<InfoIcon />} withColor="info">
      info
    </IconButton>
    <IconButton withIcon={<CheckCircleIcon />} withColor="success">
      success
    </IconButton>
    <IconButton withIcon={<WarningIcon />} withColor="warning">
      warning
    </IconButton>
    <IconButton withIcon={<DangerousIcon />} withColor="danger">
      danger
    </IconButton>
  </Container>
);

export const placement = () => (
  <Container>
    <IconButton withIcon={<AddCircleIcon />} withColor="major">
      left
    </IconButton>
    <IconButton withIcon={<AddCircleIcon />} withColor="major" withPlacement="right">
      right
    </IconButton>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <IconButton withIcon={<AddCircleIcon />} withSize="xxs">
        xxs
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xs">
        xs
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="sm">
        sm
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="md">
        md
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="lg">
        lg
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xl">
        xl
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xxl">
        xxl
      </IconButton>
    </Column>
  </Container>
);

export const types = () => (
  <Container>
    <IconButton withIcon={<AddCircleIcon />} withType="primary">
      primary
    </IconButton>
    <IconButton withIcon={<CloseIcon />} withType="outlined">
      outlined
    </IconButton>
  </Container>
);

export const disabled = () => (
  <Container>
    <IconButton withIcon={<AddIcon />} isDisabled>
      disabled
    </IconButton>
  </Container>
);

export const iconOnly = () => (
  <Container>
    <Column>
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="xxs" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="xs" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="sm" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="md" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="lg" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="xl" />
      <IconButton withIcon={<AddIcon />} isIconOnly withSize="xxl" />
    </Column>
  </Container>
);
