/**
 * @jest-environment jsdom
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, TidyUiProvider } from '../../commons/src';
import { Grid } from '../src';
import { IItemProps } from '../src/types';

afterEach(cleanup);
const originalError = console.error;

const count = 24;

const Items = (props: IItemProps) => {
  return (
    <>
      {[...Array(count)].map((c, i) => (
        <Grid.Item key={i}>{i}</Grid.Item>
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
          <Grid.Item ele={<div />}>sample</Grid.Item>
        </Grid>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  describe('Invalid children for Grid', () => {
    let consoleOutput: string[] = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    it('Invalid children for Grid', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Grid>
            <Grid>Invalid text</Grid>
          </Grid>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
      console.error = originalError;
    });

    it('No children for Grid', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Grid></Grid>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
      console.error = originalError;
    });
  });
});
