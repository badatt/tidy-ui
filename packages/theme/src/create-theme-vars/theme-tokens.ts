import { Dict, pick } from "@tidy-ui/utils";

const tokens = ["colors", "cursor", "rounded"] as const;

export type ThemeScale =
  | typeof tokens[number]
  | "transition.duration"
  | "transition.property"
  | "transition.easing";

export function extractTokens(theme: Dict) {
  const _tokens = (tokens as unknown) as string[];
  return pick(theme, _tokens);
}

export function omitVars(rawTheme: Dict) {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
}
