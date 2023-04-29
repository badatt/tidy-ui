/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Input } from '../src';

describe('Input', () => {
  it('Basic render', () => {
    const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Input>basic</Input>
        </TidyUiProvider>,
      );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
        <TidyUiProvider theme={orchidDark}>
         <Input>basic</Input>
        </TidyUiProvider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
