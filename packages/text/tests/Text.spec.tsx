/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Text } from '../src/Text';
import { TextVariant, Tone } from '../../types/src';

const text = `the quick brown fox jumps over the lazy dog`;
const address = `
Written by John Doe.
Visit us at:
Example.com
Box 564, Disneyland
USA
`;
const HtmlTagTextVariants = () => (
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
    <sup>sub text: {text}</sup>
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

describe('Text', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Text.Base>
          <HtmlTagTextVariants />
        </Text.Base>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Text.Base>
          <HtmlTagTextVariants />
        </Text.Base>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Composites', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
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
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('TextVariants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(TextVariant)
          .filter((v) => !isNaN(Number(v)))
          .map((v) => (
            <Text.Base v={TextVariant[v]} key={v}>
              {TextVariant[v]}: {text}
            </Text.Base>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  Object.keys(TextVariant)
    .filter((v) => !isNaN(Number(v)))
    .forEach((v) => {
      it('Tones', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={`ptl${v}`}>
            {Object.keys(Tone)
              .filter((t) => !isNaN(Number(t)))
              .map((t) => (
                <Text.Base v={TextVariant[v]} tone={Tone[t]} key={`${t}${v}`}>
                  {TextVariant[v]}: {Tone[t]} {text}
                </Text.Base>
              ))}
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Tones in dark', () => {
        const tree = render(
          <TidyUiProvider theme={orchidDark} key={`ptd${v}`}>
            {Object.keys(Tone)
              .filter((t) => !isNaN(Number(t)))
              .map((t) => (
                <Text.Base v={TextVariant[v]} tone={Tone[t]} key={`${t}${v}`}>
                  {TextVariant[v]}: {Tone[t]} {text}
                </Text.Base>
              ))}
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Bold', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} bld>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Italic', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} itl>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Strike', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} stk>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Underline', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} udl>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('CamelCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} cc>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('LowerCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} lc>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('UpperCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} uc>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Disabled', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} dsb>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Extended', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} exd>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Centered', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} ctr>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Linked', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base v={TextVariant[v]} href="https://google.com">
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Truncate', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={v}>
            <Text.Base tnc style={{ width: '6em' }} v={TextVariant[v]}>
              {TextVariant[v]}: {text}
            </Text.Base>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
    });
});
