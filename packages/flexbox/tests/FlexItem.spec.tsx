/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, TidyUiProvider } from '../../commons/src';
import { AlignSelf } from '../../types/src';
import { FlexBox, FlexItem } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

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
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{}} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ flx: 'flex-grow' }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Spanning', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ span: 6 }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex basis', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ fbs: 'auto' }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex shrink', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ fsk: 1 }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flex grow', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ fgo: 2 }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Order', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ ord: 2 }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align self', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Object.keys(AlignSelf).filter((i) => !isNaN(Number(i))))
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper box={{ height }} item={{ als: AlignSelf[v] }} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper box={{ height }} item={{ fuw: true }} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBox>
          <FlexItem ele={<div />}>sample</FlexItem>
        </FlexBox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
