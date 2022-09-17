/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Divider } from '../src';
import { Text } from '../../text/src';
import { Density, Position, TVariant, Variant } from '../src/types';
import { Shade, Tone } from '../../types/src';

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

describe('EnhancedDivider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text>{text}</Text>
            <Divider.Enhanced />
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text>{text}</Text>
            <Divider.Enhanced />
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Contained', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text>{text}</Text>
            <Divider.Enhanced>
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Density', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Density)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">density={Density[v]}</Text>
              <Text>{text}</Text>
              <Divider.Enhanced density={Density[v]}>
                <Text v="caption">section {i}</Text>
              </Divider.Enhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Shades', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Shade)
          .filter((i) => !isNaN(Number(i)))
          .reverse()
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">shade={Shade[v]}</Text>
              <Text>{text}</Text>
              <Divider.Enhanced shade={Shade[v]}>
                <Text v="caption">section {i}</Text>
              </Divider.Enhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">tone={Tone[v]}</Text>
              <Text>{text}</Text>
              <Divider.Enhanced tone={Tone[v]}>
                <Text v="caption" tone={Tone[v]}>
                  section {i}
                </Text>
              </Divider.Enhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">variant={Variant[v]}</Text>
              <Text>{text}</Text>
              <Divider.Enhanced variant={Variant[v]}>
                <Text v="caption">section {i}</Text>
              </Divider.Enhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text>{text}</Text>
            <Divider.Enhanced margin="2rem">
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Justify', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Position)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">justify={Position[v]}</Text>
              <Text>{text}</Text>
              <Divider.Enhanced justify={Position[v]}>
                <Text v="caption">section {i}</Text>
              </Divider.Enhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
