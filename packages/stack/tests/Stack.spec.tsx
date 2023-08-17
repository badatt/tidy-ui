/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Divider } from '../../divider/src';
import { Stack } from '../src';
import { IStackProps } from '../src/types';
import { StackAlign, StackJustify, StackOrder } from '../../types/src';

function StackWrapper(props: IStackProps) {
  return (
    <Stack {...props}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </Stack>
  );
}

describe('Stack', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <StackWrapper />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Divider', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper divider={<Divider isVertical />} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Justify', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(StackJustify)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} justify={StackJustify[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Gap', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper gap="1rem" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom size', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper height="25rem" width="25rem" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Fold', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper canFold />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Order', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(StackOrder)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} order={StackOrder[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Align', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(StackAlign)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} align={StackAlign[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <StackWrapper margin="2rem" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
