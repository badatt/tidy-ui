import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { IStackProps } from './types';

const StackRoot = styled.div<IStackProps>`
  display: flex;
  ${({ align, order, justify, gap, canFold }) => css`
    flex-direction: ${order};
    justify-content: ${justify};
    align-content: ${align};
    gap: ${gap};
    flex-wrap: ${canFold ? 'wrap' : 'nowrap'};
  `}
  ${applyStandardOverrideStyles}
`;

const StackItem = styled.div<IStackProps>`
  ${({ align }) => css`
    align-self: ${align};
  `}
`;

export { StackItem, StackRoot };
