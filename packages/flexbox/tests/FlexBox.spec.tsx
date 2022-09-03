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
import { IFlexBoxProps, TAlignContent, TAlignItems, TFlexDirection, TJustifyContent } from '../src/types';

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
        <FlexBoxWrapper height={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Direction variants', () => {
    const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBoxWrapper height={height} fld={v as TFlexDirection} key={v} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Wrap variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {[true, false].map((v, i) => (
          <FlexBoxWrapper height={height} nowrap={v} key={i} />
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
        <FlexBoxWrapper ctr height={height} />
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
        <FlexBoxWrapper gap="8px" height={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Column gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper cgp="8px" height={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Row gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper rgp="8px" height={height} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align content variants', () => {
    const variants = [
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'unsafe',
      'safe',
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
    ];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBoxWrapper height={height} alc={v as TAlignContent} key={v} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align items variants', () => {
    const variants = [
      'normal',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'safe',
      'unsafe',
      'flex-start',
      'flex-end',
      'center',
      'start',
      'end',
      'self-start',
      'self-end',
    ];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBoxWrapper height={height} ali={v as TAlignItems} key={v} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Justify content variants', () => {
    const variants = [
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'left',
      'right',
      'normal',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe',
      'unsafe',
    ];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBoxWrapper height={height} jsc={v as TJustifyContent} key={v} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Width', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper width="600px" />
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
});
