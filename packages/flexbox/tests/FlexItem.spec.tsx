/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, TidyUiProvider } from '../../commons/src';
import { FlexBox } from '../src';
import { AlignSelf, IFlexBoxProps, IFlexItemProps } from '../src/types';

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
          <FlexBox.Item ele={<div />}>sample</FlexBox.Item>
        </FlexBox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
