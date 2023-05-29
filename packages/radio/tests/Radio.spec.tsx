/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, Status, TidyUiProvider } from '../../commons/src';
import { Radio } from '../src';

afterEach(cleanup);
const originalError = console.error;

describe('Radio', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio value="opt3">
          <Radio.Option value="opt3">Option 3</Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Radio>
          <Radio.Option value="opt1">Option 1</Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Statuses', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio>
          {Object.values(Status)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Radio.Option key={i} status={Status[v]} value={Status[v]}>
                Option {Status[v]}
              </Radio.Option>
            ))}
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sizes', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio>
          <Radio.Option value="md">Option default md</Radio.Option>
          <Radio.Option girth="lg" value="lg">
            Option lg
          </Radio.Option>
          <Radio.Option girth="xl" value="xl">
            Option xl
          </Radio.Option>
          <Radio.Option girth="xxl" value="xxl">
            Option xxl
          </Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertical', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio isVertical>
          <Radio.Option value="opt1">Option 1</Radio.Option>
          <Radio.Option value="opt2">Option 2</Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio>
          <Radio.Option disabled value="2opt1">
            Option 1
          </Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Radio value="opt3">
          <Radio.Option value="opt3" ele={<div />}>
            Option 3
          </Radio.Option>
        </Radio>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  describe('Invalid children for Radio', () => {
    let consoleOutput: string[] = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    it('Invalid children for Radio', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Radio>
            <div>Invalid text</div>
          </Radio>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
      console.error = originalError;
    });

    it('No children for Radio', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Radio></Radio>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
      console.error = originalError;
    });
  });
});
