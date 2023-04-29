import { createFontStyle, css, styled } from '@tidy-ui/commons';
import {
  filled,
  inputElementBlend,
  inputElementFrill,
  inputGroupBlend,
  inputGroupFrill,
  outlined,
  simple,
  underline,
} from './styles';
import { IInputElementProps, IInputGroupProps, ITextInputProps } from './types';

const TextInputRoot = styled.div<ITextInputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextInputMain = styled.input<ITextInputProps>`
  ${({ variant }) => css`
    ${variant === 'outlined' && outlined}
    ${variant === 'filled' && filled}
    ${variant === 'underline' && underline}
    ${variant === 'simple' && simple}
  `}
`;

const TextInputLabel = styled.div<ITextInputProps>`
  ${createFontStyle('caption')}
  margin-top: 8px;
  ${({ theme: { palette }, status }) => css`
    color: ${status && palette[status][500]};
  `}
`;

/**
 * InputGroup internal component
 * @Internal
 */
const InputGroupRoot = styled.div<IInputGroupProps>`
  ${({ blend }) => css`
    ${blend ? inputGroupBlend : inputGroupFrill}
  `}
`;

const InputElementRoot = styled.div<IInputElementProps>`
  ${({ blend }) => css`
    ${blend ? inputElementBlend : inputElementFrill}
  `}
`;

export { InputElementRoot, InputGroupRoot, TextInputLabel, TextInputMain, TextInputRoot };
