import React from 'react';
import { Girth, Tone } from '../../types/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Anchor } from '../src';

export default {
  component: Anchor,
  title: 'Presentation/Button/Anchor',
};

export const basic = () => (
  <FlexBox>
    <Anchor href="/">Basic</Anchor>
  </FlexBox>
);

export const tones = () => {
  return (
    <FlexBox gap="1rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v) => (
          <Anchor href="/" tone={Tone[v]} key={v}>
            {Tone[v]}
          </Anchor>
        ))}
    </FlexBox>
  );
};

export const girths = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v) => (
          <Anchor href="/" girth={Girth[v]} key={v}>
            girth-{Girth[v]}
          </Anchor>
        ))}
    </FlexBox>
  );
};

export const disabled = () => (
  <FlexBox>
    <Anchor href="/" disabled>
      disabled
    </Anchor>
  </FlexBox>
);

export const launchNewTab = () => (
  <FlexBox fld="column" gap="2rem">
    <Anchor href="https://www.google.com/" canLaunch>
      Google
    </Anchor>{' '}
    {Object.keys(Girth)
      .filter((i) => !isNaN(Number(i)))
      .map((v) => (
        <Text.Base key={v}>
          Lorem, ipsum dolor sit amet
          <Anchor href="https://www.google.com/" canLaunch girth={Girth[v]} tone="info">
            Google
          </Anchor>
          consectetur adipisicing elit. Aliquam hic veritatis quidem, nulla perspiciatis fugit dolores eligendi totam
          amet repellendus vel. Numquam obcaecati placeat aliquam maiores aut laboriosam vero at!
          <Anchor href="https://www.google.com/" canLaunch girth={Girth[v]} tone="info">
            Google
          </Anchor>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic veritatis quidem, nulla perspiciatis
          fugit dolores eligendi totam amet repellendus vel. Numquam obcaecati placeat aliquam maiores aut laboriosam
          vero at!
        </Text.Base>
      ))}
  </FlexBox>
);
