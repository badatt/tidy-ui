/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Text } from '../src';
import { Variant } from '../src/types';

const text = `the quick brown fox jumps over the lazy dog`;

describe('Text', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Text>{text}</Text>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Text>{text}</Text>
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
            <Text v={Variant[v]} key={i}>
              {Variant[v]}: {text}
            </Text>
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
            <Text v={Variant[v]}>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Bold', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} bld>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Italic', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} itl>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Underline', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} udl>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('CamelCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} cc>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('LowerCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} lc>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('UpperCase', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} uc>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Disabled', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} dsb>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Extended', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} exd>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Centered', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} ctr>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Linked', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]} href="https://google.com">
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text v={Variant[v]}>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Truncate', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text tnc style={{ width: '6em' }} v={Variant[v]}>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
      it('Custom margin', () => {
        const tree = render(
          <TidyUiProvider theme={orchidLight} key={i}>
            <Text mgn="0 0 5rem 0" v={Variant[v]}>
              {Variant[v]}: {text}
            </Text>
          </TidyUiProvider>,
        );
        expect(tree).toMatchSnapshot();
      });
    });
});
