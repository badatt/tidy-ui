/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { FlexBox, FlexItem } from '../src';
import { TAlignSelf } from '../src/types';

const height = '25rem';
const count = 24;

describe('FlexItem', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem key={i}>
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem key={i} flx="flex-grow">
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex basis', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem key={i} fbs="auto">
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex shrink', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem key={i} fsk={i % 3}>
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex grow', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem fgo={i % 3} key={i}>
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Order', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBox h={height}>
          {[...Array(count)].map((c, i) => (
            <FlexItem ord={i % 3} key={i}>
              <span>{i}</span>
            </FlexItem>
          ))}
        </FlexBox>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align self', () => {
    const variants = [
      'auto',
      'normal',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'unsafe',
      'safe',
      'center',
      'start',
      'end',
      'self-start',
      'self-end',
      'flex-start',
      'flex-end',
    ];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {variants.map((v) => (
          <FlexBox h={height} key={v}>
            {[...Array(count)].map((c, i) => (
              <FlexItem als={v as TAlignSelf} key={i}>
                <span>{i}</span>
              </FlexItem>
            ))}
          </FlexBox>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
