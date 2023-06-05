import { ColorHash } from '../../src/utils';

const inp = 'Hello World';

describe('Color hash', () => {
  it('Basic color hash for hsl', () => {
    const ch = new ColorHash({});
    expect(ch.hsl(inp)).toStrictEqual([225, 0.5, 0.35]);
  });

  it('Custom hue for hsl', () => {
    const ch = new ColorHash({ hue: { min: 10, max: 50 } });
    expect(ch.hsl(inp)).toStrictEqual([35.2544704264099, 0.5, 0.35]);
  });

  it('Custom single hue for hsl', () => {
    const ch = new ColorHash({ hue: 30 });
    expect(ch.hsl(inp)).toStrictEqual([30, 0.5, 0.35]);
  });

  it('Custom empty hue for hsl', () => {
    const ch = new ColorHash({ hue: { max: undefined, min: undefined } });
    expect(ch.hsl(inp)).toStrictEqual([227.29023383768913, 0.5, 0.35]);
  });

  it('Custom lightness for hsl', () => {
    const ch = new ColorHash({ lightness: 50 });
    expect(ch.hsl(inp)).toStrictEqual([225, 0.5, 50]);
  });

  it('Custom saturation for hsl', () => {
    const ch = new ColorHash({ saturation: 50 });
    expect(ch.hsl(inp)).toStrictEqual([225, 50, 0.5]);
  });

  it('Basic color hash for rgb', () => {
    const ch = new ColorHash({});
    expect(ch.rgb(inp)).toStrictEqual({ b: 133.87499999999997, g: 66.93749999999999, r: 44.625 });
  });
});
