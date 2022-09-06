/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Divider } from '../src';
import { Text } from '@tidy-ui/text';
import { Density, Position, Variant } from '../src/types';
import { Shade, Tone } from '@tidy-ui/types';

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

describe('Divider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[...Array(3)].map((v, i) => (
          <React.Fragment key={i}>
            <Text>{text}</Text>
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
            <Text>{text}</Text>
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
              <Text>{text}</Text>
              <Divider vertical />
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
              <Text v="h6">density={Density[v]}</Text>
              <Text>{text}</Text>
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
              <Text v="h6">shade={Shade[v]}</Text>
              <Text>{text}</Text>
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
              <Text v="h6">tone={Tone[v]}</Text>
              <Text>{text}</Text>
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
        {Object.keys(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <React.Fragment key={i}>
              <Text v="h6">variant={Variant[v]}</Text>
              <Text>{text}</Text>
              <Divider variant={Variant[v]} />
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
            <Text>{text}</Text>
            <Divider margin="2rem" />
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
              <Text>
                <Text v="h6">align={Position[v]}</Text>
                {text}
              </Text>
              <Divider vertical align={Position[v]} length="2rem" />
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
              <Text>
                <Text v="h6">align={Position[v]}</Text>
                {text}
              </Text>
              <Divider align={Position[v]} length="2rem" />
            </React.Fragment>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
