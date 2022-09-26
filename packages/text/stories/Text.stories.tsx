import React from 'react';
import { Text } from '../src/Text';
import { TVariant, Variant } from '../src/types';
import { Tone } from '../../types/src';
import { Ctx, TextProvider } from './TextProvider';

export default {
  component: Text,
  title: 'Presentation/Text/Text',
};

const text = `the quick brown fox jumps over the lazy dog`;
const address = `
Written by John Doe.
Visit us at:
Example.com
Box 564, Disneyland
USA
`;

const HtmlTagVariants = () => (
  <>
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
    <em>emphasized text: {text}</em>
    basic text: {text}
    <strong>strong text: {text}</strong>
    basic text: {text}
    <small>small text: {text}</small>
    basic text: {text}
    <mark>mark text: {text}</mark>
    basic text: {text}
    <del>del text: {text}</del>
    basic text: {text}
    <ins>ins text: {text}</ins>
    basic text: {text}
    <sub>sub text: {text}</sub>
    basic text: {text}
    <sup>sup text: {text}</sup>
    basic text: {text}
    <blockquote>
      blockquote: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab numquam praesentium odit nam accusantium
      saepe optio tempora maiores ipsum quo laborum, repudiandae quis, aut quod accusamus neque. Unde, accusamus et?
    </blockquote>
    basic text: {text}
    <abbr title={`abbr text: ${text}`}>ABR</abbr>
    basic text: {text}
    <address>address text: {address}</address>
    basic text: {text}
  </>
);

export const basic = () => (
  <Text.base>
    <HtmlTagVariants />
  </Text.base>
);

export const variants = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant}>
          <HtmlTagVariants />
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const composites = () => (
  <>
    <Text.base>base: {text}</Text.base>
    <Text.body1>body1: {text}</Text.body1>
    <Text.body2>body2: {text}</Text.body2>
    <Text.caption>caption: {text}</Text.caption>
    <Text.h1>h1: {text}</Text.h1>
    <Text.h2>h2: {text}</Text.h2>
    <Text.h3>h3: {text}</Text.h3>
    <Text.h4>h4: {text}</Text.h4>
    <Text.h5>h5: {text}</Text.h5>
    <Text.h6>h6: {text}</Text.h6>
    <Text.hero>hero: {text}</Text.hero>
    <Text.p>p: {text}</Text.p>
    <Text.span>span: {text}</Text.span>
    <Text.subtitle1>subtitle1: {text}</Text.subtitle1>
    <Text.subtitle2>subtitle2: {text}</Text.subtitle2>
    <Text.title1>title1: {text}</Text.title1>
    <Text.title2>title2: {text}</Text.title2>
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
              <Text.base v={Variant[variant] as TVariant} tone={Tone[v]} key={i}>
                {Tone[v]}: {text}
              </Text.base>
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
        <Text.base v={Variant[variant] as TVariant} bld>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const italic = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} itl>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const underline = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} udl>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const strike = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} stk>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const camelCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} cc>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const lowerCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} lc>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const upperCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} uc>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const disabled = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} dsb>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const centered = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} ctr>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const extended = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base v={Variant[variant] as TVariant} exd>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const linked = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base href="https://google.com" v={Variant[variant] as TVariant}>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const truncate = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.base tnc style={{ width: '6em' }} v={Variant[variant] as TVariant}>
          {text}
        </Text.base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const customMargin = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          <Text.base mgn="0 0 5rem 0" v={Variant[variant] as TVariant}>
            {text}
          </Text.base>
          <Text.base v={Variant[variant] as TVariant}>{text}</Text.base>
        </>
      )}
    </Ctx.Consumer>
  </TextProvider>
);
