/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, fireEvent, getByDisplayValue, getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, Size, Status, TidyUiProvider } from '../../commons/src';
import { Input } from '../src';
import { Variant } from '../src/types';

describe('Input', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input placeholder="basic" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Input placeholder="basic" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Types', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input placeholder="Simple input" />
        <Input.Password placeholder="Password input" />
        <Input.Number placeholder="Number input" />
        <Input.Date />
        <Input.DateTime />
        <Input.Month />
        <Input.Week />
        <Input.Time />
        <Input.Email placeholder="Email input" />
        <Input.Search placeholder="Search input" />
        <Input.Telephone placeholder="Telephone input" />
        <Input.Url placeholder="URL input" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input status="info" key={i} variant={Variant[v]} placeholder={Variant[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} variant={Variant[v]} placeholder={Variant[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sizes', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} sz={Size[v]} placeholder={Size[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Status', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input caption="Caption" key={i} status={Status[v]} placeholder={Status[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Caption', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input caption="Caption" placeholder="Enter name" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input disabled placeholder="disabled value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretched', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input stretched placeholder="stretched value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input width="300px" placeholder="stretched value" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Password visibility check', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Input.Password value="pass" placeholder="password" />
      </TidyUiProvider>,
    );
    const { container } = tree;
    const field = getByRole(container, 'form');
    expect(field).toHaveAttribute('type', 'password');
    const eyeButton = getByRole(container, 'button');
    act(() => {
      fireEvent.click(eyeButton);
    });
    expect(tree).toMatchSnapshot();
  });
});
