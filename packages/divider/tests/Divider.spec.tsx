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
import { Density, Shade, Tone, BorderStyle } from '../../types/src/';

enum Position {
  'center',
  'start',
  'end',
}

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

describe('Divider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text.Body1>{text}</Text.Body1>
            <Divider />
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
            <Divider />
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertical', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div style={{ display: 'flex' }}>
          {[...Array(3)].map((v, i) => (
            <React.Fragment key={i}>
              <Text.Body1>{text}</Text.Body1>
              <Divider isVertical />
            </React.Fragment>
          ))}
        </div>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Density', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Density)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text.H6>density={Density[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <Divider density={Density[v]} />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Shades', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Shade)
          .filter((i) => !isNaN(Number(i)))
          .reverse()
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text.H6>shade={Shade[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <Divider shade={Shade[v]} />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text.H6>tone={Tone[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <Divider tone={Tone[v]} />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(BorderStyle)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text.H6>variant={BorderStyle[v]}</Text.H6>
              <Text.Body1>{text}</Text.Body1>
              <Divider variant={BorderStyle[v]} />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text.Body1>{text}</Text.Body1>
            <Divider opacity={0.5} margin="2rem" />
          </React.Fragment>
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom vertical alignment', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Position)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <div>
                <Text.H6>align={Position[v]}</Text.H6>
                <Text.Body1>{text}</Text.Body1>
              </div>
              <Divider isVertical align={Position[v]} length="2rem" />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom horizontal alignment', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Position)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <div>
                <Text.H6>align={Position[v]}</Text.H6>
                <Text.Body1>{text}</Text.Body1>
              </div>
              <Divider align={Position[v]} length="2rem" />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
