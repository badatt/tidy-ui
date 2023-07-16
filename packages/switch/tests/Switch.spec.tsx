/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, Status, TidyUiProvider } from '../../commons/src';
import { Switch } from '../src';

describe('Switch', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Switch />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Switch />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('With label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Switch>Label</Switch>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('With custom label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Switch ele={<div>Label</div>} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Status', () => {
    const handleChange = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <Switch key={v} status={Status[v]} checked onChange={handleChange}>
              {Status[v]} choice
            </Switch>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Girths', () => {
    const handleChange = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Switch checked onChange={handleChange}></Switch>
        <Switch checked girth="lg" onChange={handleChange}></Switch>
        <Switch checked girth="xl" onChange={handleChange}></Switch>
        <Switch checked girth="xxl" onChange={handleChange}></Switch>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
