/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tooltip } from '../src';

describe('Tooltip', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="right">
          Right
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="top">
          Top
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="bottom">
          Bottom
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="left">
          Left
        </Tooltip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="right">
          Right
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="top">
          Top
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="bottom">
          Bottom
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="left">
          Left
        </Tooltip>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
