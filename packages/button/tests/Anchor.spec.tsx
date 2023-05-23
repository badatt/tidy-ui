/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Size, Tone } from '../../commons/src';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Anchor } from '../src';

describe('Render Anchor', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders with no styles dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/">simple link</Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Anchor href="/?path=/story/anchor--basic" tone={Tone[v]} key={i}>
              {Tone[v]}
            </Anchor>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sizes', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Anchor href="/?path=/story/anchor--basic" size={Size[v]} key={i}>
              size-{Size[v]}
            </Anchor>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('External anchor link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" canLaunch>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('External anchor link dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" canLaunch>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Disabled anchor link dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Anchor href="https://www.google.com/" disabled>
          external link
        </Anchor>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
