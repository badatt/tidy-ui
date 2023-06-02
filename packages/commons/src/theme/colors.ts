import { IHsla } from './types';

const slate: Record<number, IHsla> = {
  100: { alpha: 1, hue: 210, luminosity: 96, saturation: 40 },
  200: { alpha: 1, hue: 214, luminosity: 91, saturation: 32 },
  300: { alpha: 1, hue: 213, luminosity: 84, saturation: 27 },
  400: { alpha: 1, hue: 215, luminosity: 65, saturation: 20 },
  50: { alpha: 1, hue: 210, luminosity: 98, saturation: 40 },
  500: { alpha: 1, hue: 215, luminosity: 47, saturation: 16 },
  600: { alpha: 1, hue: 215, luminosity: 35, saturation: 19 },
  700: { alpha: 1, hue: 215, luminosity: 27, saturation: 25 },
  800: { alpha: 1, hue: 217, luminosity: 17, saturation: 33 },
  900: { alpha: 1, hue: 222, luminosity: 11, saturation: 47 },
  950: { alpha: 1, hue: 229, luminosity: 5, saturation: 84 },
};

const gray: Record<number, IHsla> = {
  100: { alpha: 1, hue: 220, luminosity: 96, saturation: 14 },
  200: { alpha: 1, hue: 220, luminosity: 91, saturation: 13 },
  300: { alpha: 1, hue: 216, luminosity: 84, saturation: 12 },
  400: { alpha: 1, hue: 218, luminosity: 65, saturation: 11 },
  50: { alpha: 1, hue: 210, luminosity: 98, saturation: 20 },
  500: { alpha: 1, hue: 220, luminosity: 46, saturation: 9 },
  600: { alpha: 1, hue: 215, luminosity: 34, saturation: 14 },
  700: { alpha: 1, hue: 217, luminosity: 27, saturation: 19 },
  800: { alpha: 1, hue: 215, luminosity: 17, saturation: 28 },
  900: { alpha: 1, hue: 221, luminosity: 11, saturation: 39 },
  950: { alpha: 1, hue: 224, luminosity: 4, saturation: 71 },
};

const zinc: Record<number, IHsla> = {
  100: { alpha: 1, hue: 240, luminosity: 96, saturation: 5 },
  200: { alpha: 1, hue: 240, luminosity: 90, saturation: 6 },
  300: { alpha: 1, hue: 240, luminosity: 84, saturation: 5 },
  400: { alpha: 1, hue: 240, luminosity: 65, saturation: 5 },
  50: { alpha: 1, hue: 0, luminosity: 98, saturation: 0 },
  500: { alpha: 1, hue: 240, luminosity: 46, saturation: 4 },
  600: { alpha: 1, hue: 240, luminosity: 34, saturation: 5 },
  700: { alpha: 1, hue: 240, luminosity: 26, saturation: 5 },
  800: { alpha: 1, hue: 240, luminosity: 16, saturation: 4 },
  900: { alpha: 1, hue: 240, luminosity: 10, saturation: 6 },
  950: { alpha: 1, hue: 240, luminosity: 4, saturation: 10 },
};

const neutral: Record<number, IHsla> = {
  100: { alpha: 1, hue: 0, luminosity: 96, saturation: 0 },
  200: { alpha: 1, hue: 0, luminosity: 90, saturation: 0 },
  300: { alpha: 1, hue: 0, luminosity: 83, saturation: 0 },
  400: { alpha: 1, hue: 0, luminosity: 64, saturation: 0 },
  50: { alpha: 1, hue: 0, luminosity: 98, saturation: 0 },
  500: { alpha: 1, hue: 0, luminosity: 45, saturation: 0 },
  600: { alpha: 1, hue: 0, luminosity: 32, saturation: 0 },
  700: { alpha: 1, hue: 0, luminosity: 25, saturation: 0 },
  800: { alpha: 1, hue: 0, luminosity: 15, saturation: 0 },
  900: { alpha: 1, hue: 0, luminosity: 9, saturation: 0 },
  950: { alpha: 1, hue: 0, luminosity: 4, saturation: 0 },
};

const stone: Record<number, IHsla> = {
  100: { alpha: 1, hue: 60, luminosity: 96, saturation: 5 },
  200: { alpha: 1, hue: 20, luminosity: 90, saturation: 6 },
  300: { alpha: 1, hue: 24, luminosity: 83, saturation: 6 },
  400: { alpha: 1, hue: 24, luminosity: 64, saturation: 5 },
  50: { alpha: 1, hue: 60, luminosity: 98, saturation: 9 },
  500: { alpha: 1, hue: 25, luminosity: 45, saturation: 5 },
  600: { alpha: 1, hue: 33, luminosity: 32, saturation: 5 },
  700: { alpha: 1, hue: 30, luminosity: 25, saturation: 6 },
  800: { alpha: 1, hue: 12, luminosity: 15, saturation: 6 },
  900: { alpha: 1, hue: 24, luminosity: 10, saturation: 10 },
  950: { alpha: 1, hue: 20, luminosity: 4, saturation: 14 },
};

const red: Record<number, IHsla> = {
  100: { alpha: 1, hue: 0, luminosity: 94, saturation: 93 },
  200: { alpha: 1, hue: 0, luminosity: 89, saturation: 96 },
  300: { alpha: 1, hue: 0, luminosity: 82, saturation: 94 },
  400: { alpha: 1, hue: 0, luminosity: 71, saturation: 91 },
  50: { alpha: 1, hue: 0, luminosity: 97, saturation: 86 },
  500: { alpha: 1, hue: 0, luminosity: 60, saturation: 84 },
  600: { alpha: 1, hue: 0, luminosity: 51, saturation: 72 },
  700: { alpha: 1, hue: 0, luminosity: 42, saturation: 74 },
  800: { alpha: 1, hue: 0, luminosity: 35, saturation: 70 },
  900: { alpha: 1, hue: 0, luminosity: 31, saturation: 63 },
  950: { alpha: 1, hue: 0, luminosity: 15, saturation: 75 },
};

const orange: Record<number, IHsla> = {
  100: { alpha: 1, hue: 34, luminosity: 92, saturation: 100 },
  200: { alpha: 1, hue: 32, luminosity: 83, saturation: 98 },
  300: { alpha: 1, hue: 31, luminosity: 72, saturation: 97 },
  400: { alpha: 1, hue: 27, luminosity: 61, saturation: 96 },
  50: { alpha: 1, hue: 33, luminosity: 96, saturation: 100 },
  500: { alpha: 1, hue: 25, luminosity: 53, saturation: 95 },
  600: { alpha: 1, hue: 21, luminosity: 48, saturation: 90 },
  700: { alpha: 1, hue: 17, luminosity: 40, saturation: 88 },
  800: { alpha: 1, hue: 15, luminosity: 34, saturation: 79 },
  900: { alpha: 1, hue: 15, luminosity: 28, saturation: 75 },
  950: { alpha: 1, hue: 13, luminosity: 15, saturation: 81 },
};

const amber: Record<number, IHsla> = {
  100: { alpha: 1, hue: 48, luminosity: 89, saturation: 96 },
  200: { alpha: 1, hue: 48, luminosity: 77, saturation: 97 },
  300: { alpha: 1, hue: 46, luminosity: 65, saturation: 97 },
  400: { alpha: 1, hue: 43, luminosity: 56, saturation: 96 },
  50: { alpha: 1, hue: 48, luminosity: 96, saturation: 100 },
  500: { alpha: 1, hue: 38, luminosity: 50, saturation: 92 },
  600: { alpha: 1, hue: 32, luminosity: 44, saturation: 95 },
  700: { alpha: 1, hue: 26, luminosity: 37, saturation: 90 },
  800: { alpha: 1, hue: 23, luminosity: 31, saturation: 83 },
  900: { alpha: 1, hue: 22, luminosity: 26, saturation: 78 },
  950: { alpha: 1, hue: 21, luminosity: 14, saturation: 92 },
};

const yellow: Record<number, IHsla> = {
  100: { alpha: 1, hue: 55, luminosity: 88, saturation: 97 },
  200: { alpha: 1, hue: 53, luminosity: 77, saturation: 98 },
  300: { alpha: 1, hue: 50, luminosity: 64, saturation: 98 },
  400: { alpha: 1, hue: 48, luminosity: 53, saturation: 96 },
  50: { alpha: 1, hue: 55, luminosity: 95, saturation: 92 },
  500: { alpha: 1, hue: 45, luminosity: 47, saturation: 93 },
  600: { alpha: 1, hue: 41, luminosity: 40, saturation: 96 },
  700: { alpha: 1, hue: 35, luminosity: 33, saturation: 92 },
  800: { alpha: 1, hue: 32, luminosity: 29, saturation: 81 },
  900: { alpha: 1, hue: 28, luminosity: 26, saturation: 73 },
  950: { alpha: 1, hue: 26, luminosity: 14, saturation: 83 },
};

const lime: Record<number, IHsla> = {
  100: { alpha: 1, hue: 80, luminosity: 89, saturation: 89 },
  200: { alpha: 1, hue: 81, luminosity: 80, saturation: 88 },
  300: { alpha: 1, hue: 82, luminosity: 67, saturation: 85 },
  400: { alpha: 1, hue: 83, luminosity: 55, saturation: 78 },
  50: { alpha: 1, hue: 78, luminosity: 95, saturation: 92 },
  500: { alpha: 1, hue: 84, luminosity: 44, saturation: 81 },
  600: { alpha: 1, hue: 85, luminosity: 35, saturation: 85 },
  700: { alpha: 1, hue: 86, luminosity: 27, saturation: 78 },
  800: { alpha: 1, hue: 86, luminosity: 23, saturation: 69 },
  900: { alpha: 1, hue: 88, luminosity: 20, saturation: 61 },
  950: { alpha: 1, hue: 89, luminosity: 10, saturation: 80 },
};

const green: Record<number, IHsla> = {
  100: { alpha: 1, hue: 141, luminosity: 93, saturation: 84 },
  200: { alpha: 1, hue: 141, luminosity: 85, saturation: 79 },
  300: { alpha: 1, hue: 142, luminosity: 73, saturation: 77 },
  400: { alpha: 1, hue: 142, luminosity: 58, saturation: 69 },
  50: { alpha: 1, hue: 138, luminosity: 97, saturation: 76 },
  500: { alpha: 1, hue: 142, luminosity: 45, saturation: 71 },
  600: { alpha: 1, hue: 142, luminosity: 36, saturation: 76 },
  700: { alpha: 1, hue: 142, luminosity: 29, saturation: 72 },
  800: { alpha: 1, hue: 143, luminosity: 24, saturation: 64 },
  900: { alpha: 1, hue: 144, luminosity: 20, saturation: 61 },
  950: { alpha: 1, hue: 145, luminosity: 10, saturation: 80 },
};

const emerald: Record<number, IHsla> = {
  100: { alpha: 1, hue: 149, luminosity: 90, saturation: 80 },
  200: { alpha: 1, hue: 152, luminosity: 80, saturation: 76 },
  300: { alpha: 1, hue: 156, luminosity: 67, saturation: 72 },
  400: { alpha: 1, hue: 158, luminosity: 52, saturation: 64 },
  50: { alpha: 1, hue: 152, luminosity: 96, saturation: 81 },
  500: { alpha: 1, hue: 160, luminosity: 39, saturation: 84 },
  600: { alpha: 1, hue: 161, luminosity: 30, saturation: 94 },
  700: { alpha: 1, hue: 163, luminosity: 24, saturation: 94 },
  800: { alpha: 1, hue: 163, luminosity: 20, saturation: 88 },
  900: { alpha: 1, hue: 164, luminosity: 16, saturation: 86 },
  950: { alpha: 1, hue: 166, luminosity: 9, saturation: 91 },
};

const teal: Record<number, IHsla> = {
  100: { alpha: 1, hue: 167, luminosity: 89, saturation: 85 },
  200: { alpha: 1, hue: 168, luminosity: 78, saturation: 84 },
  300: { alpha: 1, hue: 171, luminosity: 64, saturation: 77 },
  400: { alpha: 1, hue: 172, luminosity: 50, saturation: 66 },
  50: { alpha: 1, hue: 166, luminosity: 97, saturation: 76 },
  500: { alpha: 1, hue: 173, luminosity: 40, saturation: 80 },
  600: { alpha: 1, hue: 175, luminosity: 32, saturation: 84 },
  700: { alpha: 1, hue: 175, luminosity: 26, saturation: 77 },
  800: { alpha: 1, hue: 176, luminosity: 22, saturation: 69 },
  900: { alpha: 1, hue: 176, luminosity: 19, saturation: 61 },
  950: { alpha: 1, hue: 179, luminosity: 10, saturation: 84 },
};

const cyan: Record<number, IHsla> = {
  100: { alpha: 1, hue: 185, luminosity: 90, saturation: 96 },
  200: { alpha: 1, hue: 186, luminosity: 82, saturation: 94 },
  300: { alpha: 1, hue: 187, luminosity: 69, saturation: 92 },
  400: { alpha: 1, hue: 188, luminosity: 53, saturation: 86 },
  50: { alpha: 1, hue: 183, luminosity: 96, saturation: 100 },
  500: { alpha: 1, hue: 189, luminosity: 43, saturation: 94 },
  600: { alpha: 1, hue: 192, luminosity: 36, saturation: 91 },
  700: { alpha: 1, hue: 193, luminosity: 31, saturation: 82 },
  800: { alpha: 1, hue: 194, luminosity: 27, saturation: 70 },
  900: { alpha: 1, hue: 196, luminosity: 24, saturation: 64 },
  950: { alpha: 1, hue: 197, luminosity: 15, saturation: 79 },
};

const sky: Record<number, IHsla> = {
  100: { alpha: 1, hue: 204, luminosity: 94, saturation: 94 },
  200: { alpha: 1, hue: 201, luminosity: 86, saturation: 94 },
  300: { alpha: 1, hue: 199, luminosity: 74, saturation: 95 },
  400: { alpha: 1, hue: 198, luminosity: 60, saturation: 93 },
  50: { alpha: 1, hue: 204, luminosity: 97, saturation: 100 },
  500: { alpha: 1, hue: 199, luminosity: 48, saturation: 89 },
  600: { alpha: 1, hue: 200, luminosity: 39, saturation: 98 },
  700: { alpha: 1, hue: 201, luminosity: 32, saturation: 96 },
  800: { alpha: 1, hue: 201, luminosity: 27, saturation: 90 },
  900: { alpha: 1, hue: 202, luminosity: 24, saturation: 80 },
  950: { alpha: 1, hue: 204, luminosity: 16, saturation: 80 },
};

const blue: Record<number, IHsla> = {
  100: { alpha: 1, hue: 214, luminosity: 93, saturation: 95 },
  200: { alpha: 1, hue: 213, luminosity: 87, saturation: 97 },
  300: { alpha: 1, hue: 212, luminosity: 78, saturation: 96 },
  400: { alpha: 1, hue: 213, luminosity: 68, saturation: 94 },
  50: { alpha: 1, hue: 214, luminosity: 97, saturation: 100 },
  500: { alpha: 1, hue: 217, luminosity: 60, saturation: 91 },
  600: { alpha: 1, hue: 221, luminosity: 53, saturation: 83 },
  700: { alpha: 1, hue: 224, luminosity: 48, saturation: 76 },
  800: { alpha: 1, hue: 226, luminosity: 40, saturation: 71 },
  900: { alpha: 1, hue: 224, luminosity: 33, saturation: 64 },
  950: { alpha: 1, hue: 226, luminosity: 21, saturation: 57 },
};

const indigo: Record<number, IHsla> = {
  100: { alpha: 1, hue: 226, luminosity: 94, saturation: 100 },
  200: { alpha: 1, hue: 228, luminosity: 89, saturation: 96 },
  300: { alpha: 1, hue: 230, luminosity: 82, saturation: 94 },
  400: { alpha: 1, hue: 234, luminosity: 74, saturation: 89 },
  50: { alpha: 1, hue: 226, luminosity: 97, saturation: 100 },
  500: { alpha: 1, hue: 239, luminosity: 67, saturation: 84 },
  600: { alpha: 1, hue: 243, luminosity: 59, saturation: 75 },
  700: { alpha: 1, hue: 245, luminosity: 51, saturation: 58 },
  800: { alpha: 1, hue: 244, luminosity: 41, saturation: 55 },
  900: { alpha: 1, hue: 242, luminosity: 34, saturation: 47 },
  950: { alpha: 1, hue: 244, luminosity: 20, saturation: 47 },
};

const violet: Record<number, IHsla> = {
  100: { alpha: 1, hue: 251, luminosity: 95, saturation: 91 },
  200: { alpha: 1, hue: 251, luminosity: 92, saturation: 95 },
  300: { alpha: 1, hue: 252, luminosity: 85, saturation: 95 },
  400: { alpha: 1, hue: 255, luminosity: 76, saturation: 92 },
  50: { alpha: 1, hue: 250, luminosity: 98, saturation: 100 },
  500: { alpha: 1, hue: 258, luminosity: 66, saturation: 90 },
  600: { alpha: 1, hue: 262, luminosity: 58, saturation: 83 },
  700: { alpha: 1, hue: 263, luminosity: 50, saturation: 70 },
  800: { alpha: 1, hue: 263, luminosity: 42, saturation: 69 },
  900: { alpha: 1, hue: 264, luminosity: 35, saturation: 67 },
  950: { alpha: 1, hue: 261, luminosity: 23, saturation: 73 },
};

const purple: Record<number, IHsla> = {
  100: { alpha: 1, hue: 269, luminosity: 95, saturation: 100 },
  200: { alpha: 1, hue: 269, luminosity: 92, saturation: 100 },
  300: { alpha: 1, hue: 269, luminosity: 85, saturation: 97 },
  400: { alpha: 1, hue: 270, luminosity: 75, saturation: 95 },
  50: { alpha: 1, hue: 270, luminosity: 98, saturation: 100 },
  500: { alpha: 1, hue: 271, luminosity: 65, saturation: 91 },
  600: { alpha: 1, hue: 271, luminosity: 56, saturation: 81 },
  700: { alpha: 1, hue: 272, luminosity: 47, saturation: 72 },
  800: { alpha: 1, hue: 273, luminosity: 39, saturation: 67 },
  900: { alpha: 1, hue: 274, luminosity: 32, saturation: 66 },
  950: { alpha: 1, hue: 274, luminosity: 21, saturation: 87 },
};

const fuchsia: Record<number, IHsla> = {
  100: { alpha: 1, hue: 287, luminosity: 95, saturation: 100 },
  200: { alpha: 1, hue: 288, luminosity: 91, saturation: 96 },
  300: { alpha: 1, hue: 291, luminosity: 83, saturation: 93 },
  400: { alpha: 1, hue: 292, luminosity: 73, saturation: 91 },
  50: { alpha: 1, hue: 289, luminosity: 98, saturation: 100 },
  500: { alpha: 1, hue: 292, luminosity: 61, saturation: 84 },
  600: { alpha: 1, hue: 293, luminosity: 49, saturation: 69 },
  700: { alpha: 1, hue: 295, luminosity: 40, saturation: 72 },
  800: { alpha: 1, hue: 295, luminosity: 33, saturation: 70 },
  900: { alpha: 1, hue: 297, luminosity: 28, saturation: 64 },
  950: { alpha: 1, hue: 297, luminosity: 16, saturation: 90 },
};

const pink: Record<number, IHsla> = {
  100: { alpha: 1, hue: 326, luminosity: 95, saturation: 78 },
  200: { alpha: 1, hue: 326, luminosity: 90, saturation: 85 },
  300: { alpha: 1, hue: 327, luminosity: 82, saturation: 87 },
  400: { alpha: 1, hue: 329, luminosity: 70, saturation: 86 },
  50: { alpha: 1, hue: 327, luminosity: 97, saturation: 73 },
  500: { alpha: 1, hue: 330, luminosity: 60, saturation: 81 },
  600: { alpha: 1, hue: 333, luminosity: 51, saturation: 71 },
  700: { alpha: 1, hue: 335, luminosity: 42, saturation: 78 },
  800: { alpha: 1, hue: 336, luminosity: 35, saturation: 74 },
  900: { alpha: 1, hue: 336, luminosity: 30, saturation: 69 },
  950: { alpha: 1, hue: 336, luminosity: 17, saturation: 84 },
};

const rose: Record<number, IHsla> = {
  100: { alpha: 1, hue: 356, luminosity: 95, saturation: 100 },
  200: { alpha: 1, hue: 353, luminosity: 90, saturation: 96 },
  300: { alpha: 1, hue: 353, luminosity: 82, saturation: 96 },
  400: { alpha: 1, hue: 351, luminosity: 71, saturation: 95 },
  50: { alpha: 1, hue: 356, luminosity: 97, saturation: 100 },
  500: { alpha: 1, hue: 350, luminosity: 60, saturation: 89 },
  600: { alpha: 1, hue: 347, luminosity: 50, saturation: 77 },
  700: { alpha: 1, hue: 345, luminosity: 41, saturation: 83 },
  800: { alpha: 1, hue: 343, luminosity: 35, saturation: 80 },
  900: { alpha: 1, hue: 342, luminosity: 30, saturation: 75 },
  950: { alpha: 1, hue: 343, luminosity: 16, saturation: 88 },
};

const color = {
  amber,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  neutral,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc,
};

export { color };
