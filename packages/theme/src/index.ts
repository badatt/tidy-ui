import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';

export { defaultBase } from './base';
export * from './colors';
export { createColor, hsla } from './utils';

import { ITidyUITheme } from '@tidy-ui/types';
export const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
export const css = baseCss as ThemedCssFunction<ITidyUITheme>;

export { theme as orchidDark } from './orchid-dark';
export { theme as orchidLight } from './orchid-light';
