import React from 'react';
//import styled, { css, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { orchidLight, orchidDark, css, styled } from '@tidy-ui/commons';
import { TidyUiProvider } from '@tidy-ui/commons';

const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ left, fill, theme: { palette } }) =>
    css`
      position: absolute;
      top: 0;
      left: ${left || fill ? 0 : '50vw'};
      border-right: ${left ? '1px solid #202020' : 'none'};
      right: ${left ? '50vw' : 0};
      width: ${fill ? '100vw' : '50vw'};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${palette.background.default};
    `,
);

export const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'light' ? orchidLight : orchidDark;

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <TidyUiProvider theme={orchidLight}>
            <ThemeBlock left>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
          <TidyUiProvider theme={orchidDark}>
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
        </>
      );
    }
    default: {
      return (
        <TidyUiProvider theme={storyTheme}>
          <ThemeBlock fill>
            <StoryFn />
          </ThemeBlock>
        </TidyUiProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];
