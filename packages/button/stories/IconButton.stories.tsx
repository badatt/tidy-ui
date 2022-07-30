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
      Major
    </IconButton>
    <IconButton withIcon={<CancelIcon />} withColor="minor">
      Minor
    </IconButton>
    <IconButton withIcon={<CloseIcon />} withColor="neutral">
      Neutral
    </IconButton>
    <IconButton withIcon={<InfoIcon />} withColor="info">
      Info
    </IconButton>
    <IconButton withIcon={<CheckCircleIcon />} withColor="success">
      Success
    </IconButton>
    <IconButton withIcon={<WarningIcon />} withColor="warning">
      Warning
    </IconButton>
    <IconButton withIcon={<DangerousIcon />} withColor="danger">
      Danger
    </IconButton>
  </Container>
);

export const placement = () => (
  <Container>
    <IconButton withIcon={<AddCircleIcon />}>Left</IconButton>
    <IconButton withIcon={<AddCircleIcon />} withPlacement="right">
      Right
    </IconButton>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <IconButton withIcon={<AddCircleIcon />} withSize="xxs">
        Xxs
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xs">
        Xs
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="sm">
        Sm
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="md">
        Md
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="lg">
        Lg
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xl">
        Xl
      </IconButton>
      <IconButton withIcon={<AddCircleIcon />} withSize="xxl">
        Xxl
      </IconButton>
    </Column>
  </Container>
);

export const types = () => (
  <Container>
    <IconButton withIcon={<AddCircleIcon />} withType="primary">
      Primary
    </IconButton>
    <IconButton withIcon={<CloseIcon />} withType="outlined">
      Outlined
    </IconButton>
  </Container>
);

export const disabled = () => (
  <Container>
    <IconButton withIcon={<AddIcon />} isDisabled>
      Disabled
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
