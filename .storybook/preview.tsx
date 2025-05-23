import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import {
  orchidLight,
  orchidDark,
  css,
  styled,
  TidyUiProvider,
  GlobalFont,
  GlobalResetStyle,
  GlobalDefaultStyle,
} from '../packages/commons/src';
import { Toaster } from '../packages/toaster/src';
import additionalViePorts from './viewports';
import { light, dark } from './theme';

export const parameters = {
  darkMode: {
    dark: { ...dark },
    light: { ...light },
  },
  viewport: {
    viewports: { ...additionalViePorts, ...INITIAL_VIEWPORTS },
  },
};

const ThemeBlock = styled.div<{ left?: boolean; filled?: boolean; padding?: string }>(
  ({ left, filled, padding }) =>
    css`
      position: absolute;
      top: 0;
      left: ${left || filled ? 0 : '50vw'};
      border-right: ${left ? '1px solid #202020' : 'none'};
      right: ${left ? '50vw' : 0};
      width: ${filled ? '100vw' : '50vw'};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: ${padding};
    `,
);

export const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;
  const padding = ['Layout/Container'].includes(context.title) ? '0' : '1rem';

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <GlobalResetStyle />
          <GlobalFont />
          <TidyUiProvider theme={orchidLight} toaster={<Toaster limit={5} />}>
            <GlobalDefaultStyle />
            <ThemeBlock left padding={padding}>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
          <TidyUiProvider theme={orchidDark} toaster={<Toaster limit={5} />}>
            <GlobalDefaultStyle />
            <ThemeBlock padding={padding}>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
        </>
      );
    }
    case 'dark': {
      return (
        <>
          <GlobalResetStyle />
          <GlobalFont />
          <TidyUiProvider theme={orchidDark} toaster={<Toaster limit={5} />}>
            <GlobalDefaultStyle />
            <ThemeBlock filled padding={padding}>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
        </>
      );
    }
    case 'light': {
      return (
        <>
          <GlobalResetStyle />
          <GlobalFont />
          <TidyUiProvider theme={orchidLight} toaster={<Toaster limit={5} />}>
            <GlobalDefaultStyle />
            <ThemeBlock filled padding={padding}>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
        </>
      );
    }
    default: {
      return (
        <>
          <GlobalResetStyle />
          <GlobalFont />
          <TidyUiProvider theme={orchidLight} toaster={<Toaster limit={5} />}>
            <GlobalDefaultStyle />
            <ThemeBlock filled padding={padding}>
              <StoryFn />
            </ThemeBlock>
          </TidyUiProvider>
        </>
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
    },
  },
};

export const decorators = [withTheme];
