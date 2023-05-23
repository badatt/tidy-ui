import React from 'react';
import { Icon } from '../../commons/src';
import { ButtonGroup, ButtonCluster, IconButton, Button } from '../src';

export default {
  component: ButtonCluster,
  title: 'Presentation/Button/ButtonCluster',
};

export const basic = () => (
  <ButtonCluster>
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
  </ButtonCluster>
);

export const stretched = () => (
  <ButtonCluster isStretched>
    <Button variant="simple" tone="danger">
      Cancel
    </Button>
    <Button tone="success">Ok</Button>
  </ButtonCluster>
);

export const disabled = () => (
  <ButtonCluster disabled>
    <IconButton icon={<Icon.AddCircle />}>Add</IconButton>
    <ButtonGroup>
      <IconButton icon={<Icon.Add />} />
      <IconButton icon={<Icon.CheckCircle />} />
      <IconButton icon={<Icon.Info />} />
      <IconButton icon={<Icon.Warning />} />
      <IconButton icon={<Icon.Dangerous />} />
      <IconButton icon={<Icon.Close />} />
    </ButtonGroup>
    <IconButton icon={<Icon.Cancel />} />
  </ButtonCluster>
);
