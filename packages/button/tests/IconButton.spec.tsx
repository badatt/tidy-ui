/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { IconButton } from '../src';
import { Size, Tone } from '../../types/src';

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

  it('IconButton with all size variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <IconButton icon={<Icon.AddCircle />} size={Size[v]} key={i}>
              {Size[v]}
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
        {Object.values(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <IconButton icon={<Icon.AddCircle />} iconOnly size={Size[v]} key={i} />
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
        <IconButton icon={<Icon.Add />} h="3rem" w="10rem">
          Add
        </IconButton>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
