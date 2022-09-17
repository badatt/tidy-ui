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

export const outlined = () => (
  <ButtonCluster>
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
  </ButtonCluster>
);

export const stretched = () => (
  <ButtonCluster stretched>
    <Button variant="simple" tone="danger">
      Cancel
    </Button>
    <Button tone="success">Ok</Button>
  </ButtonCluster>
);

export const disabled = () => (
  <ButtonCluster disabled>
    <IconButton icon={<Icon.AddCircle />} variant="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton icon={<Icon.Add />} variant="outlined" />
      <IconButton icon={<Icon.CheckCircle />} variant="outlined" />
      <IconButton icon={<Icon.Info />} variant="outlined" />
      <IconButton icon={<Icon.Warning />} variant="outlined" />
      <IconButton icon={<Icon.Dangerous />} variant="outlined" />
      <IconButton icon={<Icon.Close />} variant="outlined" />
    </ButtonGroup>
    <IconButton icon={<Icon.Cancel />} variant="outlined" />
  </ButtonCluster>
);

export const customDimensions = () => (
  <ButtonCluster h="3rem">
    <IconButton icon={<Icon.AddCircle />} variant="outlined">
      Add
    </IconButton>
    <ButtonGroup>
      <IconButton icon={<Icon.Add />} variant="outlined" />
      <IconButton icon={<Icon.CheckCircle />} variant="outlined" />
      <IconButton icon={<Icon.Info />} variant="outlined" />
      <IconButton icon={<Icon.Warning />} variant="outlined" />
      <IconButton icon={<Icon.Dangerous />} variant="outlined" />
      <IconButton icon={<Icon.Close />} variant="outlined" />
    </ButtonGroup>
    <IconButton icon={<Icon.Cancel />} variant="outlined" />
  </ButtonCluster>
);
