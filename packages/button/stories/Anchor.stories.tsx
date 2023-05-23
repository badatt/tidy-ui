import React from 'react';
import { Size, Tone } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Anchor } from '../src';

export default {
  component: Anchor,
  title: 'Presentation/Button/Anchor',
};

export const basic = () => (
  <FlexBox>
    <Anchor href="/?path=/story/anchor--basic">Basic</Anchor>
  </FlexBox>
);

export const tones = () => {
  return (
    <FlexBox gap="1rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Anchor href="/?path=/story/anchor--basic" tone={Tone[v]} key={i}>
            {Tone[v]}
          </Anchor>
        ))}
    </FlexBox>
  );
};

export const sizes = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Anchor href="/?path=/story/anchor--basic" size={Size[v]} key={i}>
            size-{Size[v]}
          </Anchor>
        ))}
    </FlexBox>
  );
};

export const disabled = () => (
  <FlexBox>
    <Anchor href="/?path=/story/anchor--basic" disabled>
      disabled
    </Anchor>
  </FlexBox>
);

export const launchNewTab = () => (
  <FlexBox>
    <Anchor href="https://www.google.com/" canLaunch>
      Google
    </Anchor>
  </FlexBox>
);
