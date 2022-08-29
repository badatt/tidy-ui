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
import { IFlexBoxProps, IFlexItemProps, TAlignSelf } from '../src/types';

const height = '350px';

function FlexBoxWrapper(props: { box: IFlexBoxProps; item: IFlexItemProps }) {
  return (
    <FlexBox {...props.box}>
      <FlexBox.Item {...props.item}>1</FlexBox.Item>
      <FlexBox.Item {...props.item}>2</FlexBox.Item>
      <FlexBox.Item {...props.item}>3</FlexBox.Item>
      <FlexBox.Item {...props.item}>4</FlexBox.Item>
      <FlexBox.Item {...props.item}>5</FlexBox.Item>
      <FlexBox.Item {...props.item}>6</FlexBox.Item>
      <FlexBox.Item {...props.item}>7</FlexBox.Item>
      <FlexBox.Item {...props.item}>8</FlexBox.Item>
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

  it('Spanning', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ span: 6 }} />
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

  it('Full width', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ h: height }} item={{ fuw: true }} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
