import { applyStandardOverrideStyles, createFontStyle, css, styled } from '@tidy-ui/commons';
import { baseStyles, realStyles } from './styles';
import { INoteProps } from './types';

const NoteRoot = styled.div<INoteProps>`
  position: relative;
  ${createFontStyle()}
  padding: 0.75rem 1rem;
  ${({ isReal }) => css`
    ${isReal ? realStyles : baseStyles}
  `}
  ${applyStandardOverrideStyles}
`;

export { NoteRoot };
