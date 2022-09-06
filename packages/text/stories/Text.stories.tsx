import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text } from '../src';
import { TVariant, Variant } from '../src/types';
import { Tone } from '@tidy-ui/types';
import { Ctx, TextProvider } from './TextProvider';

export default {
  component: Text,
  title: 'Presentation/Text/Text',
};

const text = `the quick brown fox jumps over the lazy dog`;

export const basic = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant}>
          {Variant[variant]}: {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const variants = () => (
  <>
    {Object.keys(Variant)
      .filter((v) => !isNaN(Number(v)))
      .map((v, i) => (
        <Text v={Variant[v]} key={i}>
          {Variant[v]}: {text}
        </Text>
      ))}
  </>
);

export const tones = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          {Object.keys(Tone)
            .filter((v) => !isNaN(Number(v)))
            .map((v, i) => (
              <Text v={Variant[variant] as TVariant} tone={Tone[v]} key={i}>
                {Tone[v]}: {text}
              </Text>
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
        <Text v={Variant[variant] as TVariant} bld>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const italic = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} itl>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const underline = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} udl>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const camelCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} cc>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const lowerCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} lc>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const upperCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} uc>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const disabled = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} dsb>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const centered = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} ctr>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const extended = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text v={Variant[variant] as TVariant} exd>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const linked = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text href="https://google.com" v={Variant[variant] as TVariant}>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const truncate = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text tnc style={{ width: '6em' }} v={Variant[variant] as TVariant}>
          {text}
        </Text>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const customMargin = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          <Text mgn="0 0 5rem 0" v={Variant[variant] as TVariant}>
            {text}
          </Text>
          <Text v={Variant[variant] as TVariant}>{text}</Text>
        </>
      )}
    </Ctx.Consumer>
  </TextProvider>
);
