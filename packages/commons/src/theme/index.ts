import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';

export { color } from './colors';
export { hsla } from './utils';

import { ITidyUITheme } from '@tidy-ui/types';
const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
const css = baseCss as ThemedCssFunction<ITidyUITheme>;
export { css, styled };

export { GlobalDefault } from './globals/global-default';
export { GlobalFont } from './globals/global-font';
export { GlobalReset } from './globals/global-reset';
export { theme as orchidDark } from './orchid-dark';
export { theme as orchidLight } from './orchid-light';
