import React from 'react';
import { DangerousIcon } from '@tidy-ui/commons';
import { css, hsla, neutral, styled } from '@tidy-ui/commons';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Presentation/Badge',
};

const Container = styled.div`
  ${({ theme: { isDark } }) => css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    position: relative;
    width: fit-content;
    color: ${isDark ? hsla(neutral[400]) : hsla(neutral[600])};
  `}
`;

const Icon = styled(DangerousIcon)`
  height: 20px;
  width: 20px;
`;

export const basic = () => (
  <Container>
    <Badge data={99}>
      <Icon />
    </Badge>
    <Badge data={99} hidden>
      <Icon />
    </Badge>
  </Container>
);

export const tones = () => (
  <Container>
    <Badge data={50} tone="major">
      <Icon />
    </Badge>
    <Badge data={60} tone="minor">
      <Icon />
    </Badge>
    <Badge data={70} tone="neutral">
      <Icon />
    </Badge>
    <Badge data={80} tone="success">
      <Icon />
    </Badge>
    <Badge data={90} tone="info">
      <Icon />
    </Badge>
    <Badge data={100} tone="warning">
      <Icon />
    </Badge>
    <Badge data={110} tone="danger">
      <Icon />
    </Badge>
  </Container>
);

export const outlined = () => (
  <Container>
    <Badge data={50} tone="major" outlined>
      <Icon />
    </Badge>
    <Badge data={60} tone="minor" outlined>
      <Icon />
    </Badge>
    <Badge data={70} tone="neutral" outlined>
      <Icon />
    </Badge>
    <Badge data={80} tone="success" outlined>
      <Icon />
    </Badge>
    <Badge data={90} tone="info" outlined>
      <Icon />
    </Badge>
    <Badge data={100} tone="warning" outlined>
      <Icon />
    </Badge>
    <Badge data={110} tone="danger" outlined>
      <Icon />
    </Badge>
  </Container>
);

export const maxValue = () => (
  <Container>
    <Badge data={198} max={150}>
      <Icon />
    </Badge>
  </Container>
);

export const dotted = () => (
  <Container>
    <Badge dotted tone="warning">
      <Icon />
    </Badge>
  </Container>
);

export const blinking = () => (
  <Container>
    <Badge dotted tone="success" blink>
      <Icon />
    </Badge>
    <Badge data={9} tone="minor" blink>
      <Icon />
    </Badge>
  </Container>
);
