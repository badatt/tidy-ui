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
import { ButtonGroup, ButtonToolbar, IconButton } from '../src';

export default {
  component: ButtonToolbar,
  title: 'Components/Button/ButtonToolbar',
};

export const basic = () => (
  <ButtonToolbar>
    <IconButton withIcon={<AddCircleIcon />}>Add</IconButton>
    <ButtonGroup>
      <IconButton withIcon={<AddIcon />} />
      <IconButton withIcon={<CheckCircleIcon />} />
      <IconButton withIcon={<InfoIcon />} />
      <IconButton withIcon={<WarningIcon />} />
      <IconButton withIcon={<DangerousIcon />} />
      <IconButton withIcon={<CancelIcon />} />
    </ButtonGroup>
    <IconButton withIcon={<CloseIcon />} withPlacement="right">
      Delete
    </IconButton>
  </ButtonToolbar>
);

export const outlined = () => (
  <ButtonToolbar>
    <IconButton withIcon={<AddCircleIcon />} withType="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton withIcon={<AddIcon />} withType="outlined" />
      <IconButton withIcon={<CheckCircleIcon />} withType="outlined" />
      <IconButton withIcon={<InfoIcon />} withType="outlined" />
      <IconButton withIcon={<WarningIcon />} withType="outlined" />
      <IconButton withIcon={<DangerousIcon />} withType="outlined" />
      <IconButton withIcon={<CloseIcon />} withType="outlined" />
    </ButtonGroup>
    <IconButton withIcon={<CancelIcon />} withType="outlined" />
  </ButtonToolbar>
);

export const disabled = () => (
  <ButtonToolbar isDisabled>
    <IconButton withIcon={<AddCircleIcon />} withType="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton withIcon={<AddIcon />} withType="outlined" />
      <IconButton withIcon={<CheckCircleIcon />} withType="outlined" />
      <IconButton withIcon={<InfoIcon />} withType="outlined" />
      <IconButton withIcon={<WarningIcon />} withType="outlined" />
      <IconButton withIcon={<DangerousIcon />} withType="outlined" />
      <IconButton withIcon={<CloseIcon />} withType="outlined" />
    </ButtonGroup>
    <IconButton withIcon={<CancelIcon />} withType="outlined" />
  </ButtonToolbar>
);
