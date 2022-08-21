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
  title: 'Presentation/Button/ButtonToolbar',
};

export const basic = () => (
  <ButtonToolbar>
    <IconButton icon={<AddCircleIcon />}>Add</IconButton>
    <ButtonGroup>
      <IconButton icon={<AddIcon />} />
      <IconButton icon={<CheckCircleIcon />} />
      <IconButton icon={<InfoIcon />} />
      <IconButton icon={<WarningIcon />} />
      <IconButton icon={<DangerousIcon />} />
      <IconButton icon={<CancelIcon />} />
    </ButtonGroup>
    <IconButton icon={<CloseIcon />} placement="right">
      Delete
    </IconButton>
  </ButtonToolbar>
);

export const outlined = () => (
  <ButtonToolbar>
    <IconButton icon={<AddCircleIcon />} variant="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton icon={<AddIcon />} variant="outlined" />
      <IconButton icon={<CheckCircleIcon />} variant="outlined" />
      <IconButton icon={<InfoIcon />} variant="outlined" />
      <IconButton icon={<WarningIcon />} variant="outlined" />
      <IconButton icon={<DangerousIcon />} variant="outlined" />
      <IconButton icon={<CloseIcon />} variant="outlined" />
    </ButtonGroup>
    <IconButton icon={<CancelIcon />} variant="outlined" />
  </ButtonToolbar>
);

export const disabled = () => (
  <ButtonToolbar disabled>
    <IconButton icon={<AddCircleIcon />} variant="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton icon={<AddIcon />} variant="outlined" />
      <IconButton icon={<CheckCircleIcon />} variant="outlined" />
      <IconButton icon={<InfoIcon />} variant="outlined" />
      <IconButton icon={<WarningIcon />} variant="outlined" />
      <IconButton icon={<DangerousIcon />} variant="outlined" />
      <IconButton icon={<CloseIcon />} variant="outlined" />
    </ButtonGroup>
    <IconButton icon={<CancelIcon />} variant="outlined" />
  </ButtonToolbar>
);
