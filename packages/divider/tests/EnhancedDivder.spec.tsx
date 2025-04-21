/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { DividerEnhanced } from '../src';
import { Text } from '../../text/src';
import { Density, Shade, Tone, BorderStyle } from '../../types/src/';

enum Position {
  'center',
  'start',
  'end',
}

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

describe('EnhancedDivider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text.Body1>{text}</Text.Body1>
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
            <Text.Body1>{text}</Text.Body1>
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
            <Text.Body1>{text}</Text.Body1>
            <DividerEnhanced>
              <Text.Caption>section {i}</Text.Caption>
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
              <Text.H6>density={Density[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <DividerEnhanced density={Density[v]}>
                <Text.Caption>section {i}</Text.Caption>
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
              <Text.H6>shade={Shade[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <DividerEnhanced shade={Shade[v]}>
                <Text.Caption>section {i}</Text.Caption>
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
              <Text.H6>tone={Tone[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <DividerEnhanced tone={Tone[v]}>
                <Text.Caption tone={Tone[v]}>section {i}</Text.Caption>
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
              <Text.H6>variant={BorderStyle[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <DividerEnhanced variant={BorderStyle[v]}>
                <Text.Caption>section {i}</Text.Caption>
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
            <Text.Body1>{text}</Text.Body1>
            <DividerEnhanced margin="2rem">
              <Text.Caption>section {i}</Text.Caption>
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
              <Text.H6>justify={Position[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <DividerEnhanced justify={Position[v]}>
                <Text.Caption>section {i}</Text.Caption>
              </DividerEnhanced>
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
