/**
 * @jest-environment jsdom
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, TidyUiProvider } from '../../commons/src';
import { Grid, GridItem } from '../src';
import { IItemProps } from '../src/types';

afterEach(cleanup);

const count = 24;

const Items = (props: IItemProps) => {
  return (
    <>
      {[...Array(count)].map((c, i) => (
        <GridItem key={i}>{i}</GridItem>
      ))}
    </>
  );
};

describe('Grid', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid>
          <Items />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Fixed', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid isFixed>
          <Items />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Gutter', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid gutter="1rem">
          <Items />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Spacing', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid gap={10}>
          <Items />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom layout', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid>
          <Items xs={24} sm={16} md={12} lg={8} xl={4} />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid ele={<div />}>
          <Items xs={24} sm={16} md={12} lg={8} xl={4} />
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom item element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Grid>
          <GridItem ele={<div />}>sample</GridItem>
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
