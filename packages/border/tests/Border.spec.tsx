/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Positioning, Tone, Border as Borders, Shade } from '../../types/src';
import { Chip } from '../../chip/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Border } from '../src';
import { IBorderProps } from '../src/types';

const BorderWithProps = (props: IBorderProps) => (
  <Border
    h="15rem"
    w="25rem"
    padding="1rem"
    content={
      <Chip size="xxs" tone={props.tone || 'neutral'}>
        Border
      </Chip>
    }
    {...props}
  >
    basic
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

describe('Border', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Border h="25rem" w="35rem">
          <Content />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Border h="25rem" w="35rem">
          <Content />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Padding', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Border h="25rem" w="35rem" padding="3rem">
          <Content heading="padding 3rem" />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Border h="25rem" w="35rem" margin="3rem" padding="1rem">
          <Content heading="margin 3rem & padding 1rem" />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Density', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Border h="25rem" w="35rem" density="8px" padding="1rem">
          <Content heading="density 8px" />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('With content', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <BorderWithProps>
          <Content heading="chip on border" />
        </BorderWithProps>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Content positioning', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Positioning)
          .filter((p) => !isNaN(Number(p)))
          .map((p, i) => (
            <BorderWithProps key={i} positioning={Positioning[p]}>
              <Content heading={`Position  '${Positioning[p]}'`} />
            </BorderWithProps>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Sharp', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Border h="25rem" w="35rem" padding="1rem" sharp>
          <Content heading="sharp corner" />
        </Border>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((t) => !isNaN(Number(t)))
          .map((t, i) => (
            <BorderWithProps key={i} tone={Tone[t]}>
              <Content heading={`Tone  '${Tone[t]}'`} />
            </BorderWithProps>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Shades', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Shade)
          .filter((s) => !isNaN(Number(s)))
          .map((s, i) => (
            <BorderWithProps key={i} shade={Shade[s]}>
              <Content heading={`Shade  '${Shade[s]}'`} />
            </BorderWithProps>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Borders)
          .filter((b) => !isNaN(Number(b)))
          .map((b, i) => (
            <BorderWithProps key={i} variant={Borders[b]} sharp>
              <Content heading={`Variant  '${Borders[b]}'`} />
            </BorderWithProps>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});