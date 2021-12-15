import baseStyled, { ThemedStyledInterface } from 'styled-components';

import { ITidyUIBaseTheme as IITidyUIBaseTheme } from './types/base';
export type ITidyUIBaseTheme = IITidyUIBaseTheme;

import { ITidyUITheme as IITidyUITheme } from './types/theme';
export type ITidyUITheme = IITidyUITheme;

export { defaultBase } from './base';
export { theme as orchidLight } from './orchid-light';
export { theme as orchidDark } from './orchid-dark';

export const styled = baseStyled as ThemedStyledInterface<ITidyUITheme>;
