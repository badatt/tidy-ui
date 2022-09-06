/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/commons';
import { FlexBox } from '../src';
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  IFlexBoxProps,
  JustifyContent,
  TAlignContent,
  TAlignItems,
  TFlexDirection,
  TJustifyContent,
} from '../src/types';

const height = '350px';

function FlexBoxWrapper(props: IFlexBoxProps) {
  return (
    <FlexBox {...props}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </FlexBox>
  );
}

describe('FlexBox', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper h={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Direction', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(FlexDirection)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper h={height} fld={FlexDirection[v]} key={v} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Wrap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {[true, false].map((v, i) => (
          <FlexBoxWrapper h={height} nowrap={v} key={i} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper ctr />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered with height set', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper ctr h={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full height', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper fuh />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper gap="8px" h={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Column gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper cgp="8px" h={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Row gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper rgp="8px" h={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align content', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(AlignContent)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper h={height} alc={AlignContent[v]} key={v} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align items', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(AlignItems)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper h={height} ali={AlignItems[v]} key={v} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Justify content', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(JustifyContent)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper h={height} jsc={JustifyContent[v]} key={v} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Width', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper w="600px" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flow', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper flow="column wrap" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Margin', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper flow="column wrap" margin="0 0 3rem 0" />
        <FlexBoxWrapper flow="column wrap" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
