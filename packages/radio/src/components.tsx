import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, IPalette, styled } from '@tidy-ui/commons';
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
  ${({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : 'row'};
  `}
  ${applyStandardOverrideStyles}
`;

const RadioOptionRoot = styled.div<Pick<IRadioOptionProps, 'girth' | 'disabled'>>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ girth }) => css`
    gap: calc(0.5rem * ${sizeScale[girth!]});
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

  ${({ theme: { palette }, status, girth }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
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
  ${createFontStyle()}
  ${applyStandardOverrideStyles}
`;

export { RadioOptionInput, RadioOptionLabel, RadioOptionRoot, RadioRoot };
