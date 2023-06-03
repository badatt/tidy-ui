import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';

export { color } from './colors';
export * from './utils';

import { ITidyUITheme } from './types';
export * from './types';
const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
const css = baseCss as ThemedCssFunction<ITidyUITheme>;

export { css, styled };

export { defaultBase as baseTheme } from './base';
export { theme as orchidDark } from './orchid-dark';
export { theme as orchidLight } from './orchid-light';
