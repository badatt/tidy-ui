/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, fireEvent, getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Girth, Status, InputVariant } from '../../types/src';
import { Input } from '../src';

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
        <Input type="password" placeholder="Password input" />
        <Input type="number" placeholder="Number input" />
        <Input type="date" />
        <Input type="datetime-local" />
        <Input type="month" />
        <Input type="week" />
        <Input type="time" />
        <Input type="email" placeholder="Email input" />
        <Input type="search" placeholder="Search input" />
        <Input type="tel" placeholder="Telephone input" />
        <Input type="url" placeholder="URL input" />
        <Input type="text" placeholder="Text input" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(InputVariant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input status="info" key={i} variant={InputVariant[v]} placeholder={InputVariant[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(InputVariant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} variant={InputVariant[v]} placeholder={InputVariant[v]} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sizes', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} girth={Girth[v]} placeholder={Girth[v]} />
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
        <Input isStretched placeholder="stretched value" />
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
        <Input type="password" placeholder="password" />
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
