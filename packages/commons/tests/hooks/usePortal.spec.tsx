/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight, usePortal, TidyUiProvider } from '../../src';
import * as isValidDom from '../../src/utils/isValidDom';

describe('usePortal', () => {
  it('Should create Portal on body', () => {
    const TestComponent = () => {
      const { Portal } = usePortal({ container: document.body });
      return <Portal>portal</Portal>;
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should create Portal on and element', () => {
    const TestComponent = () => {
      const { Portal } = usePortal({ container: () => document.getElementById('sample') });
      return <Portal>portal</Portal>;
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div id="sample"></div>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should create Portal on an id', () => {
    const TestComponent = () => {
      const { Portal } = usePortal({ id: 'sample' });
      return <Portal>portal</Portal>;
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div id="sample"></div>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Should work on empty input', () => {
    const TestComponent = () => {
      const { Portal } = usePortal();
      return <Portal>portal</Portal>;
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div id="sample"></div>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Not a valid dom', () => {
    const TestComponent = () => {
      const spy = jest.spyOn(isValidDom, 'default');
      spy.mockReturnValue(false);
      const { Portal } = usePortal();
      return <Portal>portal</Portal>;
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div id="sample"></div>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
