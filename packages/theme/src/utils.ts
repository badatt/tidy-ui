import { IColor, IHsla } from '@tidy-ui/types';

export const hsla = (p: IHsla, alpha: number = p.alpha) =>
  `hsla(${p.hue}, ${p.saturation}%, ${p.luminosity}%, ${alpha})`;

export const createColor = (p: Record<number, IHsla>): IColor => {
  return {
    100: hsla(p[100]),
    200: hsla(p[200]),
    300: hsla(p[300]),
    400: hsla(p[400]),
    50: hsla(p[50]),
    500: hsla(p[500]),
    600: hsla(p[600]),
    700: hsla(p[700]),
    800: hsla(p[800]),
    900: hsla(p[900]),
    shades: p,
  };
};
