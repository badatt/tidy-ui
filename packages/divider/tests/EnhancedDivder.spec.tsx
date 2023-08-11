/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider, Shade, Tone, BorderStyle } from '../../commons/src';
import { DividerEnhanced } from '../src';
import { Text } from '../../text/src';
import { Density, Position } from '../src/types';

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

describe('EnhancedDivider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced />
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
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced />
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
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced>
              <Text.caption>section {i}</Text.caption>
            </DividerEnhanced>
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
              <Text.h6>density={Density[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
              <DividerEnhanced density={Density[v]}>
                <Text.caption>section {i}</Text.caption>
              </DividerEnhanced>
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
              <Text.h6>shade={Shade[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
              <DividerEnhanced shade={Shade[v]}>
                <Text.caption>section {i}</Text.caption>
              </DividerEnhanced>
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
              <Text.h6>tone={Tone[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
              <DividerEnhanced tone={Tone[v]}>
                <Text.caption tone={Tone[v]}>section {i}</Text.caption>
              </DividerEnhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(BorderStyle)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text.h6>variant={BorderStyle[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
              <DividerEnhanced variant={BorderStyle[v]}>
                <Text.caption>section {i}</Text.caption>
              </DividerEnhanced>
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
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced margin="2rem">
              <Text.caption>section {i}</Text.caption>
            </DividerEnhanced>
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
              <Text.h6>justify={Position[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
              <DividerEnhanced justify={Position[v]}>
                <Text.caption>section {i}</Text.caption>
              </DividerEnhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
