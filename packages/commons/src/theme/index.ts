import baseStyled, { css as baseCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';

export { color } from './colors';
export { hsla } from './utils';

import { ITidyUITheme } from '@tidy-ui/types';
const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
const css = baseCss as ThemedCssFunction<ITidyUITheme>;
export { css, styled };

export { GlobalStyle } from './global-style';
export { theme as orchidDark } from './orchid-dark';
export { theme as orchidLight } from './orchid-light';
