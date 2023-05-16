/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, TidyUiProvider } from '../../commons/src';
import { FlexBox } from '../src';
import { AlignContent, AlignItems, FlexDirection, IFlexBoxProps, JustifyContent } from '../src/types';

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
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper height={height} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Direction', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(FlexDirection)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper height={height} fld={FlexDirection[v]} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Wrap', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {[true, false].map((v, i) => (
          <FlexBoxWrapper height={height} nowrap={v} key={i} />
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper ctr />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Centered with height set', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper ctr height={height} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full height', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper fuh />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gap', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper gap="8px" height={height} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Column gap', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper cgp="8px" height={height} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Row gap', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper rgp="8px" height={height} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align content', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(AlignContent)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper height={height} alc={AlignContent[v]} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align items', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(AlignItems)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper height={height} ali={AlignItems[v]} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Justify content', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(JustifyContent)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBoxWrapper height={height} jsc={JustifyContent[v]} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper width="600px" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Flow', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper flow="column wrap" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <FlexBoxWrapper flow="column wrap" margin="0 0 3rem 0" />
        <FlexBoxWrapper flow="column wrap" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
