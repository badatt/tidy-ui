/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { IconButton } from '../src';
import { Size, Tone } from '@tidy-ui/types';

describe('Render Button', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <IconButton icon={<Icon.Add />}>Add</IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled IconButton', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.Add />} disabled>
          Disabled
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Tone).map((v, i) => (
          <IconButton icon={<Icon.AddCircle />} tone={v} key={i}>
            {v}
          </IconButton>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all size variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Size).map((v, i) => (
          <IconButton icon={<Icon.AddCircle />} size={v} key={i}>
            {v}
          </IconButton>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with all type variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />} variant="primary">
          Primary
        </IconButton>
        <IconButton icon={<Icon.Close />} variant="outlined">
          Outlined
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with only icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {Object.values(Size).map((v, i) => (
          <IconButton icon={<Icon.AddCircle />} iconOnly size={v} key={i} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('IconButton with placement variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
        <IconButton icon={<Icon.AddCircle />} placement="right">
          Right
        </IconButton>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
