/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Girth, Status } from '../../types/src';
import { Option, Select } from '../src';

describe('Select', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Select>
          <Option value="none" disabled hidden>
            Select one
          </Option>
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Select>
          <Option value="none" disabled hidden>
            Select one
          </Option>
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Girths', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Select key={v} girth={Girth[v]} defaultValue="none">
              <Option value="none" disabled hidden>
                Select one
              </Option>
              <Option value="option-1">Option 1</Option>
              <Option value="option-2">Option 2</Option>
              <Option value="option-3">Option 3</Option>
            </Select>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Statuses', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Select key={v} status={Status[v]} defaultValue="none">
              <Option value="none" disabled hidden>
                Select one
              </Option>
              <Option value="option-1">Option 1</Option>
              <Option value="option-2">Option 2</Option>
              <Option value="option-3">Option 3</Option>
            </Select>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Statuses in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Select key={v} status={Status[v]} defaultValue="none">
              <Option value="none" disabled hidden>
                Select one
              </Option>
              <Option value="option-1">Option 1</Option>
              <Option value="option-2">Option 2</Option>
              <Option value="option-3">Option 3</Option>
            </Select>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
