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
import { TAlignContent, TAlignItems, TFlexDirection, TFlexWrap, TJustifyContent } from '../src/types';

const height = '25rem';
const count = 8;

describe('FlexBox', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Direction variants', () => {
    const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBox h={height} fld={v as TFlexDirection} key={v}>
            {[...Array(count)].map((c, i) => (
              <div key={i}>
                <span>{i}</span>
              </div>
            ))}
          </FlexBox>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Wrap variants', () => {
    const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBox h={height} fwp={v as TFlexWrap} key={v}>
            {[...Array(count)].map((c, i) => (
              <div key={i}>
                <span>{i}</span>
              </div>
            ))}
          </FlexBox>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox ctr>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered with height set', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox ctr h={height}>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full height', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox fuh>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox gap=".5rem" h={height}>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Column gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox cgp=".5rem" h={height}>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Row gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox rgp=".5rem" h={height}>
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
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
          <FlexBox h={height} alc={v as TAlignContent} key={v}>
            {[...Array(count)].map((c, i) => (
              <div key={i}>
                <span>{i}</span>
              </div>
            ))}
          </FlexBox>
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
          <FlexBox h={height} ali={v as TAlignItems} key={v}>
            {[...Array(count)].map((c, i) => (
              <div key={i}>
                <span>{i}</span>
              </div>
            ))}
          </FlexBox>
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
          <FlexBox h={height} jsc={v as TJustifyContent} key={v}>
            {[...Array(count)].map((c, i) => (
              <div key={i}>
                <span>{i}</span>
              </div>
            ))}
          </FlexBox>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Width', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox w="25rem">
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flow', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox flow="column wrap">
          {[...Array(count)].map((c, i) => (
            <div key={i}>
              <span>{i}</span>
            </div>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
