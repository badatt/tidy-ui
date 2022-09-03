import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { Tone, TTone } from '@tidy-ui/types';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Presentation/Badge',
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const basic = () => (
  <Container>
    <Badge data={120}>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge data={99}>
      <div style={{ fontSize: '1em' }}>Mails</div>
    </Badge>
  </Container>
);

export const tones = () => {
  return (
    <Container>
      {Object.values(Tone).map((t, i) => (
        <Badge data={(i + 1) * 10} tone={t as TTone} key={i}>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      ))}
    </Container>
  );
};

export const outlined = () => {
  return (
    <Container>
      {Object.values(Tone).map((t, i) => (
        <Badge data={(i + 1) * 10} tone={t as TTone} key={i} outlined>
          <Icon ele={<Icon.Dangerous />} />
        </Badge>
      ))}
    </Container>
  );
};

export const maxValue = () => (
  <Container>
    <Badge data={198} max={150}>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
  </Container>
);

export const dotted = () => (
  <Container>
    <Badge dotted tone="warning">
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
  </Container>
);

export const blinking = () => (
  <Container>
    <Badge dotted tone="success" blink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge data={9} tone="minor" blink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
  </Container>
);
