import React from 'react';
import { Text } from '../src/Text';
import { TextVariant, Tone } from '../../types/src';
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
      <span>-- Lorem</span>
    </blockquote>
    basic text: {text}
    <abbr title={`abbr text: ${text}`}>ABR</abbr>
    basic text: {text}
    <address>address text: {address}</address>
    basic text: {text}
  </>
);

export const basic = () => (
  <Text.Base>
    <HtmlTagVariants />
  </Text.Base>
);

export const variants = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]}>
          <HtmlTagVariants />
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const composites = () => (
  <>
    <Text.Base>base: {text}</Text.Base>
    <Text.Body1>body1: {text}</Text.Body1>
    <Text.Body2>body2: {text}</Text.Body2>
    <Text.Caption>caption: {text}</Text.Caption>
    <Text.H1>h1: {text}</Text.H1>
    <Text.H2>h2: {text}</Text.H2>
    <Text.H3>h3: {text}</Text.H3>
    <Text.H4>h4: {text}</Text.H4>
    <Text.H5>h5: {text}</Text.H5>
    <Text.H6>h6: {text}</Text.H6>
    <Text.Hero>hero: {text}</Text.Hero>
    <Text.P>p: {text}</Text.P>
    <Text.Span>span: {text}</Text.Span>
    <Text.Subtitle1>subtitle1: {text}</Text.Subtitle1>
    <Text.Subtitle2>subtitle2: {text}</Text.Subtitle2>
    <Text.Title1>title1: {text}</Text.Title1>
    <Text.Title2>title2: {text}</Text.Title2>
  </>
);

export const tones = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <>
          {Object.keys(Tone)
            .filter((v) => !isNaN(Number(v)))
            .map((v) => (
              <Text.Base v={TextVariant[variant]} tone={Tone[v]} key={v}>
                {Tone[v]}: {text}
              </Text.Base>
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
        <Text.Base v={TextVariant[variant]} bld>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const italic = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} itl>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const underline = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} udl>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const strike = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} stk>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const camelCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} cc>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const lowerCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} lc>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const upperCase = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} uc>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const disabled = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} dsb>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const centered = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} ctr>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const extended = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base v={TextVariant[variant]} exd>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const linked = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base href="https://google.com" v={TextVariant[variant]}>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);

export const truncate = () => (
  <TextProvider>
    <Ctx.Consumer>
      {({ variant }) => (
        <Text.Base tnc style={{ width: '6em' }} v={TextVariant[variant]}>
          {text}
        </Text.Base>
      )}
    </Ctx.Consumer>
  </TextProvider>
);
