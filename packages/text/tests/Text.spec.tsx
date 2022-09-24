/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Text, TextBase } from '../src/Text';
import { Variant } from '../src/types';
import { Tone } from '@tidy-ui/types';

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
        <Text.body1>
          <HtmlTagVariants />
        </Text.body1>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Text.body1>
          <HtmlTagVariants />
        </Text.body1>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Variant)
          .filter((v) => !isNaN(Number(v)))
          .map((v, i) => (
            <TextBase v={Variant[v]} key={i}>
              {Variant[v]}: {text}
            </TextBase>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  Object.keys(Variant)
    .filter((v) => !isNaN(Number(v)))
    .forEach((v, i) => {
      it('Tones', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            {Object.keys(Tone)
              .filter((t) => !isNaN(Number(t)))
              .map((t, i) => (
                <TextBase v={Variant[v]} tone={Tone[t]} key={i}>
                  {Variant[v]}: {Tone[t]} {text}
                </TextBase>
              ))}
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Tones in dark', () => {
        const tree = render(
          <TidyUiProvider theme={orchidDark} key={i}>
            {Object.keys(Tone)
              .filter((t) => !isNaN(Number(t)))
              .map((t, i) => (
                <TextBase v={Variant[v]} tone={Tone[t]} key={i}>
                  {Variant[v]}: {Tone[t]} {text}
                </TextBase>
              ))}
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Bold', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} bld>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Italic', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} itl>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Strike', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} stk>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Underline', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} udl>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('CamelCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} cc>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('LowerCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} lc>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('UpperCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} uc>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Disabled', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} dsb>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Extended', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} exd>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Centered', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} ctr>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Linked', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase v={Variant[v]} href="https://google.com">
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Truncate', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase tnc style={{ width: '6em' }} v={Variant[v]}>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Custom margin', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <TextBase mgn="0 0 5rem 0" v={Variant[v]}>
              {Variant[v]}: {text}
            </TextBase>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
    });
});
