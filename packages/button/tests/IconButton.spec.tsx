/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { IconButton } from '../src';
import { Girth, Tone } from '../../types/src';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled IconButton', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />} disabled>
          Disabled
        </IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <IconButton icon={<Icon.AddCircle />} tone={Tone[v]} key={i}>
              {Tone[v]}
            </IconButton>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all girth variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <IconButton icon={<Icon.AddCircle />} girth={Girth[v]} key={i}>
              {Girth[v]}
            </IconButton>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all type variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />} variant="primary">
          Primary
        </IconButton>
        <IconButton icon={<Icon.Close />} variant="outlined">
          Outlined
        </IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with only icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <IconButton icon={<Icon.AddCircle />} isIconOnly girth={Girth[v]} key={i} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with placement variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
        <IconButton icon={<Icon.AddCircle />} placement="right">
          Right
        </IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />} height="3rem" width="10rem">
          Add
        </IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
