/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, cleanup, fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Divider } from '../../divider/src';
import { Tone } from '../../types/src';
import { Breadcrumb, BreadcrumbItem } from '../src';

afterEach(cleanup);

describe('Breadcrumb', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Breadcrumb>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Limited', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5}>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#">link 6</BreadcrumbItem>
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
              <BreadcrumbItem href="#">link 1</BreadcrumbItem>
              <BreadcrumbItem href="#">link 2</BreadcrumbItem>
              <BreadcrumbItem href="#">link 3</BreadcrumbItem>
              <BreadcrumbItem href="#">link 4</BreadcrumbItem>
              <BreadcrumbItem href="#">link 5</BreadcrumbItem>
              <BreadcrumbItem href="#">link 6</BreadcrumbItem>
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
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#" isActive>
            link 4
          </BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#">item 6</BreadcrumbItem>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom separator', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb separator={<Divider isVertical />}>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#" isActive>
            active item
          </BreadcrumbItem>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Expanded', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5}>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#">link 6</BreadcrumbItem>
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

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb>
          <BreadcrumbItem href="#" ele={<div />}>
            link 1
          </BreadcrumbItem>
        </Breadcrumb>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom expanded', () => {
    const mockCb = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Breadcrumb limit={5} onExpand={mockCb}>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#">link 6</BreadcrumbItem>
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
