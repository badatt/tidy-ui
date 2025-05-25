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
  const selectedTheme = context.globals.theme === 'dark' ? orchidDark : orchidLight;
  const padding = ['Layout/Container'].includes(context.title) ? '0' : '1rem';

  return (
    <>
      <GlobalResetStyle />
      <GlobalFont />
      <TidyUiProvider theme={selectedTheme} toaster={<Toaster limit={5} />}>
        <GlobalDefaultStyle />
        <ThemeBlock filled padding={padding}>
          <StoryFn />
        </ThemeBlock>
      </TidyUiProvider>
    </>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
  },
};

export const decorators = [withTheme];
