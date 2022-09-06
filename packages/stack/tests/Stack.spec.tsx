/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, styled, orchidDark, orchidLight, css } from '@tidy-ui/commons';
import { Divider } from '@tidy-ui/divider';
import { Tag, Button, Badge, Text, IconButton } from '@tidy-ui/presentation';
import { Stack } from '../src';
import { Align, IStackProps, Justify, Order, TAlign, TJustify, TOrder } from '../src/types';

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
      <ThemeProvider theme={orchidLight}>
        <StackWrapper />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <StackWrapper />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Divider', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <StackWrapper divider={<Divider vertical />} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Justify', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(Justify)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} justify={Justify[v]} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <StackWrapper gap="1rem" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom size', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <StackWrapper h="25rem" w="25rem" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Fold', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <StackWrapper fold />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Order', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(Order)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} order={Order[v]} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Align', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.keys(Align)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <StackWrapper key={i} align={Align[v]} />
          ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom margin', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <StackWrapper margin="2rem" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
