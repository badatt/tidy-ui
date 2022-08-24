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
import { IFlexBoxProps, IFlexItemProps, TAlignSelf } from '../src/types';

const height = '350px';

function FlexBoxWrapper(props: { box: IFlexBoxProps; item: IFlexItemProps }) {
  return (
    <FlexBox {...props.box}>
      <FlexItem {...props.item}>1</FlexItem>
      <FlexItem {...props.item}>2</FlexItem>
      <FlexItem {...props.item}>3</FlexItem>
      <FlexItem {...props.item}>4</FlexItem>
      <FlexItem {...props.item}>5</FlexItem>
      <FlexItem {...props.item}>6</FlexItem>
      <FlexItem {...props.item}>7</FlexItem>
      <FlexItem {...props.item}>8</FlexItem>
    </FlexBox>
  );
}

describe('FlexItem', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{}} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ flx: 'flex-grow' }} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex basis', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ fbs: 'auto' }} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex shrink', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ fsk: 1 }} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex grow', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ fgo: 2 }} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Order', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ ord: 2 }} />
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
          <FlexBoxWrapper box={{ h: height }} item={{ als: v as TAlignSelf }} key={v} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
