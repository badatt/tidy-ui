import React from 'react';
import { DangerousIcon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/theme';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Badge',
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  color: gray;
`;

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

export const basic = () => (
  <Container>
    <Badge content={120} color="success">
      <Icon />
    </Badge>
    <Badge content={120} max={99}>
      <Icon />
    </Badge>
    <Badge content={0}>
      <Icon />
    </Badge>
    <Badge content={0} showZero>
      <Icon />
    </Badge>
    <Badge content={999} invisible>
      <Icon />
    </Badge>
    <Badge variant="dot">
      <Icon />
    </Badge>
  </Container>
);
