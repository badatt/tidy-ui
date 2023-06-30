/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { baseTheme } from '../../src';

describe('Base theme', () => {
  it('Basic', () => {
    expect(baseTheme).toMatchSnapshot();
  });
});
