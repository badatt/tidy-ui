import React from 'react';
import { Positioning, Tone, Border as Borders, Shade } from '../../types/src';
import { Chip } from '../../chip/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Border } from '../src';
import { IBorderProps } from '../src/types';

export default {
  component: Border,
  title: 'Layout/Border',
};

const BorderWithProps = (props: IBorderProps) => (
  <Border
    h="25rem"
    w="35rem"
    padding="1rem"
    density="4px"
    align={14}
    content={
      <Chip size="xxs" tone={props.tone || 'neutral'}>
        Border
      </Chip>
    }
    {...props}
  >
    {props.children}
  </Border>
);

const Content = (props: { heading?: string }) => (
  <>
    <Text.h6>{props.heading || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</Text.h6>
    <Text.body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea dolore ut omnis dignissimos, quaerat cumque.
      Temporibus provident natus culpa inventore, eligendi, accusamus neque est commodi suscipit, reprehenderit
      recusandae a.
    </Text.body1>
    <Text.body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea dolore ut omnis dignissimos, quaerat cumque.
      Temporibus provident natus culpa inventore,
    </Text.body1>
  </>
);

export const basic = () => (
  <Border h="25rem" w="35rem">
    <Content />
  </Border>
);

export const padding = () => (
  <Border h="25rem" w="35rem" padding="3rem">
    <Content heading="padding 3rem" />
  </Border>
);

export const margin = () => (
  <Border h="25rem" w="35rem" margin="3rem" padding="1rem">
    <Content heading="margin 3rem & padding 1rem" />
  </Border>
);

export const density = () => (
  <Border h="25rem" w="35rem" density="8px" padding="1rem">
    <Content heading="density 8px" />
  </Border>
);

export const withContent = () => (
  <BorderWithProps>
    <Content heading="chip on border" />
  </BorderWithProps>
);

export const contentPositioning = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Positioning)
      .filter((p) => !isNaN(Number(p)))
      .map((p, i) => (
        <BorderWithProps key={i} positioning={Positioning[p]}>
          <Content heading={`Position  '${Positioning[p]}'`} />
        </BorderWithProps>
      ))}
  </FlexBox>
);

export const sharp = () => (
  <Border h="25rem" w="35rem" padding="1rem" sharp>
    <Content heading="sharp corner" />
  </Border>
);

export const tones = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Tone)
      .filter((t) => !isNaN(Number(t)))
      .map((t, i) => (
        <BorderWithProps key={i} tone={Tone[t]}>
          <Content heading={`Tone  '${Tone[t]}'`} />
        </BorderWithProps>
      ))}
  </FlexBox>
);

export const shades = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Shade)
      .filter((s) => !isNaN(Number(s)))
      .map((s, i) => (
        <BorderWithProps key={i} shade={Shade[s]}>
          <Content heading={`Shade  '${Shade[s]}'`} />
        </BorderWithProps>
      ))}
  </FlexBox>
);

export const variants = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Borders)
      .filter((b) => !isNaN(Number(b)))
      .map((b, i) => (
        <BorderWithProps key={i} variant={Borders[b]} sharp>
          <Content heading={`Variant  '${Borders[b]}'`} />
        </BorderWithProps>
      ))}
  </FlexBox>
);
