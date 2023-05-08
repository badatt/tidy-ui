import { color, css, hsla, IPalette, styled } from '@tidy-ui/commons';
import { IRadioOptionProps, IRadioProps } from './types';

const sizeScale = {
  lg: 1.5,
  md: 1,
  xl: 2,
  xxl: 2.5,
};

const RadioRoot = styled.fieldset<IRadioProps>`
  display: flex;
  gap: 1em;
  ${({ vertical }) => css`
    flex-direction: ${vertical ? 'column' : 'row'};
  `}
`;

const RadioOptionRoot = styled.div<Pick<IRadioOptionProps, 'sz' | 'disabled'>>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ sz, disabled }) => css`
    gap: calc(0.5rem * ${sizeScale[sz!]});
    ${disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
      pointer-events: none;
    `}
  `}
`;

/** @internal */
const getColor = (palette: IPalette, status?: string) => (status ? palette[status][500] : palette['minor'][500]);

const RadioOptionInput = styled.input<IRadioOptionProps>`
  appearance: none;
  cursor: pointer;
  margin: 0.2em;
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${hsla(color.slate[500])};

  ::after {
    content: '';
    display: flex;
    align-self: center;
    flex-shrink: 1;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
  }

  :hover {
    ::after {
      background-color: ${hsla(color.slate[500])};
    }
  }

  ${({ theme: { palette }, status, sz }) => css`
    font-size: calc(1rem * ${sizeScale[sz!]});
    :focus {
      outline: 1px solid ${getColor(palette, status)};
    }

    :checked {
      border: 2px solid ${getColor(palette, status)};
      ::after {
        background-color: ${getColor(palette, status)};
      }
      :hover {
        border: 2px solid ${getColor(palette, status)};
        ::after {
          background-color: ${getColor(palette, status)};
        }
      }
    }
  `}
`;

const RadioOptionLabel = styled.label`
  cursor: pointer;
`;

export { RadioOptionInput, RadioOptionLabel, RadioOptionRoot, RadioRoot };
