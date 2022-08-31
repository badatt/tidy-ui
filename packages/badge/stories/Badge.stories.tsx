import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { css, hsla, color, styled } from '@tidy-ui/commons';
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
    color: ${isDark ? hsla(color.neutral[400]) : hsla(color.neutral[600])};
  `}
`;

const IconWrap = styled(Icon.Dangerous)`
  height: 20px;
  width: 20px;
`;

export const basic = () => (
  <Container>
    <Badge data={120} style={{ fontSize: '20px' }}>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge data={99} hidden>
      <IconWrap />
    </Badge>
  </Container>
);

export const tones = () => (
  <Container>
    <Badge data={50} tone="major">
      <IconWrap />
    </Badge>
    <Badge data={60} tone="minor">
      <IconWrap />
    </Badge>
    <Badge data={70} tone="neutral">
      <IconWrap />
    </Badge>
    <Badge data={80} tone="success">
      <IconWrap />
    </Badge>
    <Badge data={90} tone="info">
      <IconWrap />
    </Badge>
    <Badge data={100} tone="warning">
      <IconWrap />
    </Badge>
    <Badge data={110} tone="danger">
      <IconWrap />
    </Badge>
  </Container>
);

export const outlined = () => (
  <Container>
    <Badge data={50} tone="major" outlined>
      <IconWrap />
    </Badge>
    <Badge data={60} tone="minor" outlined>
      <IconWrap />
    </Badge>
    <Badge data={70} tone="neutral" outlined>
      <IconWrap />
    </Badge>
    <Badge data={80} tone="success" outlined>
      <IconWrap />
    </Badge>
    <Badge data={90} tone="info" outlined>
      <IconWrap />
    </Badge>
    <Badge data={100} tone="warning" outlined>
      <IconWrap />
    </Badge>
    <Badge data={110} tone="danger" outlined>
      <IconWrap />
    </Badge>
  </Container>
);

export const maxValue = () => (
  <Container>
    <Badge data={198} max={150}>
      <IconWrap />
    </Badge>
  </Container>
);

export const dotted = () => (
  <Container>
    <Badge dotted tone="warning">
      <IconWrap />
    </Badge>
  </Container>
);

export const blinking = () => (
  <Container>
    <Badge dotted tone="success" blink>
      <IconWrap />
    </Badge>
    <Badge data={9} tone="minor" blink>
      <IconWrap />
    </Badge>
  </Container>
);
