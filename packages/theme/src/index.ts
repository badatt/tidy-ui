import baseStyled, { css as baseCss, ThemedStyledInterface, ThemedCssFunction } from 'styled-components';

export { defaultBase } from './base';
export * from './colors';
export { hsla } from './utils';

import { ITidyUITheme } from '@tidy-ui/types';
export const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
export const css = baseCss as ThemedCssFunction<ITidyUITheme>;

export { theme as orchidLight } from './orchid-light';
export { theme as orchidDark } from './orchid-dark';
