import React from 'react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../types/src';
import { Text } from '../../text/src';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Presentation/Badge',
};

export const basic = () => (
  <FlexBox gap="2rem">
    <Badge data={120}>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge data={99}>
      <div style={{ fontSize: '1em' }}>
        <Text.body1>Mails</Text.body1>
      </div>
    </Badge>
  </FlexBox>
);

export const tones = () => {
  return (
    <FlexBox gap="2rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((t, i) => (
          <Badge data={(i + 1) * 10} tone={Tone[t]} key={i}>
            <Icon ele={<Icon.Dangerous />} />
          </Badge>
        ))}
    </FlexBox>
  );
};

export const outlined = () => {
  return (
    <FlexBox gap="2rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((t, i) => (
          <Badge data={(i + 1) * 10} tone={Tone[t]} key={i} outlined>
            <Icon ele={<Icon.Dangerous />} />
          </Badge>
        ))}
    </FlexBox>
  );
};

export const maxValue = () => (
  <Badge data={198} max={150}>
    <Icon ele={<Icon.Dangerous />} />
  </Badge>
);

export const dotted = () => (
  <Badge dotted tone="warning">
    <Icon ele={<Icon.Dangerous />} />
  </Badge>
);

export const blinking = () => (
  <FlexBox gap="2rem">
    <Badge dotted tone="success" blink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge data={9} tone="minor" blink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
  </FlexBox>
);
