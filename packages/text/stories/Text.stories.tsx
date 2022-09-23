import React from 'react';
import { Text, TextBase } from '../src/Text';
import { TVariant, Variant } from '../src/types';
import { Tone } from '../../types/src';
import { Ctx, TextProvider } from './TextProvider';

export default {
  component: Text,
  title: 'Presentation/Text/Text',
};

const text = `the quick brown fox jumps over the lazy dog`;

export const basic = () => (
  <Text.body1>
    basic text: {text}
    <b>bold text: {text}</b>
    basic text: {text}
    <u>underlined text: {text}</u>
    basic text: {text}
    <i>italic text: {text}</i>
    basic text: {text}
    <code>code text: {text}</code>
    basic text: {text}
    <s>strike text: {text}</s>
    basic text: {text}
  </Text.body1>
);

export const variants = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant}>
          {Variant[variant]}: basic text: {text}
          <b>bold text: {text}</b>
          basic text: {text}
          <u>underlined text: {text}</u>
          basic text: {text}
          <i>italic text: {text}</i>
          basic text: {text}
          <code>code text: {text}</code>
          basic text: {text}
          <s>strike text: {text}</s>
          basic text: {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const tones = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          {Object.keys(Tone)
            .filter((v) => !isNaN(Number(v)))
            .map((v, i) => (
              <TextBase v={Variant[variant] as TVariant} tone={Tone[v]} key={i}>
                {Tone[v]}: {text}
              </TextBase>
            ))}
        </>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const bold = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} bld>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const italic = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} itl>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const underline = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} udl>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const strike = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} stk>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const camelCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} cc>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const lowerCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} lc>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const upperCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} uc>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const disabled = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} dsb>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const centered = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} ctr>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const extended = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase v={Variant[variant] as TVariant} exd>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const linked = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase href="https://google.com" v={Variant[variant] as TVariant}>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const truncate = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <TextBase tnc style={{ width: '6em' }} v={Variant[variant] as TVariant}>
          {text}
        </TextBase>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const customMargin = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          <TextBase mgn="0 0 5rem 0" v={Variant[variant] as TVariant}>
            {text}
          </TextBase>
          <TextBase v={Variant[variant] as TVariant}>{text}</TextBase>
        </>
      )}
    </Ctx.Consumer>
  </TextProvider>
);
