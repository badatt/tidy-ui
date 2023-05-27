/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Input, InputGroup } from '../src';

describe('Input', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google.com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google.com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blend render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <InputGroup isBlend>
          <Input.Element node="$" />
          <Input placeholder="500" />
          <Input.Element node="/-" />
        </InputGroup>
        <InputGroup isBlend>
          <Input.Element node="$" />
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup isBlend>
          <Input placeholder="500" />
          <Input.Element node="/-" />
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blend dark render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <InputGroup isBlend>
          <Input.Element node="$" />
          <Input placeholder="500" />
          <Input.Element node="/-" />
        </InputGroup>
        <InputGroup isBlend>
          <Input.Element node="$" />
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup isBlend>
          <Input placeholder="500" />
          <Input.Element node="/-" />
        </InputGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
