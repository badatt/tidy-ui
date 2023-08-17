/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Input, InputGroup, InputElement } from '../src';

describe('Input', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google.com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google.com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blend render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
          <InputElement>/-</InputElement>
        </InputGroup>
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup isBlend>
          <Input placeholder="500" />
          <InputElement>/-</InputElement>
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blend dark render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
          <InputElement>/-</InputElement>
        </InputGroup>
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup isBlend>
          <Input placeholder="500" />
          <InputElement>/-</InputElement>
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
