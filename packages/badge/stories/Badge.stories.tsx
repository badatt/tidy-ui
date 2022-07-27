import React from 'react';
import { DangerousIcon } from '@tidy-ui/commons';
import { hsla, neutral, styled } from '@tidy-ui/theme';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Badge',
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: ${hsla(neutral[700])};
`;

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

export const basic = () => (
  <Container>
    <Badge withData={99}>
      <Icon />
    </Badge>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <Badge withData={50} withColor="major">
      <Icon />
    </Badge>
    <Badge withData={60} withColor="minor">
      <Icon />
    </Badge>
    <Badge withData={70} withColor="neutral">
      <Icon />
    </Badge>
    <Badge withData={80} withColor="success">
      <Icon />
    </Badge>
    <Badge withData={90} withColor="info">
      <Icon />
    </Badge>
    <Badge withData={100} withColor="warning">
      <Icon />
    </Badge>
    <Badge withData={110} withColor="danger">
      <Icon />
    </Badge>
  </Container>
);

export const maxValue = () => (
  <Container>
    <Badge withData={198} withMax={150}>
      <Icon />
    </Badge>
  </Container>
);

export const dotted = () => (
  <Container>
    <Badge isDotted withColor="warning">
      <Icon />
    </Badge>
  </Container>
);

export const blinking = () => (
  <Container>
    <Badge isDotted withColor="success" isBlink>
      <Icon />
    </Badge>
    <Badge withData={9} withColor="minor" isBlink>
      <Icon />
    </Badge>
  </Container>
);
