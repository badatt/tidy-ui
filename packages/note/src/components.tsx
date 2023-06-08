import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, styled } from '@tidy-ui/commons';
import { INoteProps } from './types';

const NoteRoot = styled.div<INoteProps>`
  position: relative;
  ${createFontStyle()}
  padding: 0.75rem 1rem;
  ${({ theme: { isDark } }) => css`
    border-left: 4px solid ${isDark ? hsla(color.yellow[800]) : hsla(color.yellow[500])};
    background-color: ${isDark ? hsla(color.yellow[700], 0.2) : hsla(color.yellow[400], 0.2)};
  `}
  ${applyStandardOverrideStyles}
`;

export { NoteRoot };
