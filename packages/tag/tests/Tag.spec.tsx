/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '../../commons/src';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tag } from '../src';
import { Tone } from '../../commons/src';

describe('Tag', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable tag', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag onClose={jest.fn()}>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag outlined>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Tag outlined>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled tag', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag disabled>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tag with icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag icon={<Icon.CheckCircle />}>html</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Tag tone={Tone[v]} key={i}>
              {Tone[v]}
            </Tag>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all magnitude variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag size="sm">html</Tag>
        <Tag>typescript</Tag>
        <Tag size="lg">javascript</Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tag h="3rem" w="10rem">
          basic
        </Tag>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
