import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { ButtonGroup, ButtonToolbar, IconButton } from '../src';

export default {
  component: ButtonToolbar,
  title: 'Presentation/Button/ButtonToolbar',
};

export const basic = () => (
  <ButtonToolbar>
    <IconButton icon={<Icon.AddCircle />}>Add</IconButton>
    <ButtonGroup>
      <IconButton icon={<Icon.Add />} />
      <IconButton icon={<Icon.CheckCircle />} />
      <IconButton icon={<Icon.Info />} />
      <IconButton icon={<Icon.Warning />} />
      <IconButton icon={<Icon.Dangerous />} />
      <IconButton icon={<Icon.Cancel />} />
    </ButtonGroup>
    <IconButton icon={<Icon.Close />} placement="right">
      Delete
    </IconButton>
  </ButtonToolbar>
);

export const outlined = () => (
  <ButtonToolbar>
    <IconButton icon={<Icon.AddCircle />} variant="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton icon={<Icon.Add />} variant="outlined" />
      <IconButton icon={<Icon.CheckCircle />} variant="outlined" />
      <IconButton icon={<Icon.Info />} variant="outlined" />
      <IconButton icon={<Icon.Warning />} variant="outlined" />
      <IconButton icon={<Icon.Dangerous />} variant="outlined" />
      <IconButton icon={<Icon.Cancel />} variant="outlined" />
    </ButtonGroup>
    <IconButton icon={<Icon.Close />} variant="outlined" />
  </ButtonToolbar>
);

export const disabled = () => (
  <ButtonToolbar disabled>
    <IconButton icon={<Icon.AddCircle />} variant="outlined">
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
