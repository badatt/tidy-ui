/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Button, ButtonGroup } from '../src';

describe('Render ButtonGroup', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <ButtonGroup>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretched ButtonGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup stretched>
          <Button variant="outlined">button 1</Button>
          <Button variant="outlined">button 2</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertically aligned ButtonGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup vertical>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Unified ButtonGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup unified>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertically unified ButtonGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup unified vertical>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled ButtonGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <ButtonGroup disabled>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
          <Button>button 4</Button>
          <Button>button 5</Button>
        </ButtonGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
