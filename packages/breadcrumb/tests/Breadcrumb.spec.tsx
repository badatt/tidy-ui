/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Divider } from '../../divider/src';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../commons/src';
import { Breadcrumb } from '../src';

describe('Breadcrumb', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Limited', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5}>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((t) => !isNaN(Number(t)))
          .map((t, i) => (
            <Breadcrumb key={i} tone={Tone[t]}>
              <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
              <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
              <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
              <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
              <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
              <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
            </Breadcrumb>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Set active item manually', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb isLastItemNotActive>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#" isActive>
            link 4
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#">item 6</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom separator', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb separator={<Divider vertical />}>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#" isActive>
            active item
          </Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Expanded', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5}>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const expandButton = getByText(container, '...');
    act(() => {
      fireEvent.click(expandButton);
    });
  });
  it('Custom expanded', () => {
    const mockCb = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5} onExpand={mockCb}>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const expandButton = getByText(container, '...');
    act(() => {
      fireEvent.click(expandButton);
      expect(mockCb).toBeCalled();
    });
  });
});
