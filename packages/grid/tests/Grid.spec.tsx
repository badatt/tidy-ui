/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/commons';
import { Grid } from '../src';
import { IItemProps } from '../src/types';

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
      <ThemeProvider theme={orchidLight}>
        <Grid>
          <Items />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Fixed', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Grid fixed>
          <Items />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Gutter', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Grid gutter="1rem">
          <Items />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Spacing', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Grid gap={10}>
          <Items />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom layout', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Grid>
          <Items xs={24} sm={16} md={12} lg={8} xl={4} />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom marginr', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Grid margin="0 0 3rem 0">
          <Items />
        </Grid>
        <Grid>
          <Items />
        </Grid>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
