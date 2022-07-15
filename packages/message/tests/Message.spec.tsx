import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { Message } from '../src';

describe('Message', () => {
  test('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Message />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
