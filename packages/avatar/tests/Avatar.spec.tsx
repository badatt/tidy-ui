/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Avatar } from '../src';

describe('Avatar', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar>basic</Avatar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Avatar>basic</Avatar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
