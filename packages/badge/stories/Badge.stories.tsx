import React from 'react';
import { Icon } from '../../commons/src';
import { Tone } from '../../types/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Badge } from '../src';

export default {
  component: Badge,
  title: 'Presentation/Badge',
};

export const basic = () => (
  <FlexBox gap="2rem">
    <Badge content={120}>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge content={99}>
      <Text.Body1>Mails</Text.Body1>
    </Badge>
  </FlexBox>
);

export const tones = () => {
  return (
    <FlexBox gap="2rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((t, i) => (
          <Badge content={(i + 1) * 10} tone={Tone[t]} key={i}>
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
          <Badge content={(i + 1) * 10} tone={Tone[t]} key={i} isOutlined>
            <Icon ele={<Icon.Dangerous />} />
          </Badge>
        ))}
    </FlexBox>
  );
};

export const maxValue = () => (
  <Badge content={198} max={150}>
    <Icon ele={<Icon.Dangerous />} />
  </Badge>
);

export const dotted = () => (
  <Badge isDotted tone="warning">
    <Icon ele={<Icon.Dangerous />} />
  </Badge>
);

export const blinking = () => (
  <FlexBox gap="2rem">
    <Badge isDotted tone="success" isBlink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
    <Badge content={9} tone="minor" isBlink>
      <Icon ele={<Icon.Dangerous />} />
    </Badge>
  </FlexBox>
);
