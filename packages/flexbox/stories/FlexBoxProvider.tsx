import React from 'react';
import { Button, ButtonCluster, ButtonGroup } from '../../button/src';
import { color, css, hsla, styled } from '../../commons/src';
import { Text } from '../../text/src';
import { IBaseProps } from '../../types/src';
import { FlexBox } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

const baseCount = 24;

const Ctx = React.createContext({ count: baseCount });

/** @internal */
export interface IFlexBoxProvider extends IBaseProps {
  /** @internal */
  children?: React.ReactNode;
  /** @internal */
  size?: number;
}

const LabelFlexBox = styled(FlexBox)<IFlexBoxProps>`
  overflow: auto;
  height: 20px;
  width: 20px;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.amber[900], 0.2)};
          color: ${hsla(color.amber[300])};
        `
      : css`
          background-color: ${hsla(color.amber[100], 0.8)};
          color: ${hsla(color.amber[900])};
        `}
`;

const LabelFlexItem = styled(FlexBox)<IFlexItemProps>`
  position: relative;
  height: 20px;
  width: 20px;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.red[900], 0.2)};
          border: 1px dashed ${hsla(color.red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(color.red[100], 0.8)};
          border: 1px dashed ${hsla(color.red[400], 0.5)};
        `}
`;

/** @internal */
const FlexBoxProvider = ({ children, size }: IFlexBoxProvider) => {
  const [count, setCount] = React.useState(size || baseCount);

  /** @internal */
  const increment = () => setCount(count + 1);
  /** @internal */
  const decrement = () => count > 1 && setCount(count - 1);
  /** @internal */
  const reset = () => setCount(size || baseCount);
  return (
    <Ctx.Provider value={{ count }}>
      <FlexBox jsc="space-between" alc="center">
        <ButtonCluster>
          <ButtonGroup>
            <Button onClick={increment} width="4rem">
              Add
            </Button>
            <Button onClick={decrement} width="4rem">
              Remove
            </Button>
          </ButtonGroup>
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset ({count})
          </Button>
        </ButtonCluster>
        <FlexBox gap="0.5rem">
          <LabelFlexBox />
          <Text.span>FlexBox</Text.span>
          <LabelFlexItem />
          <Text.span>FlexItem</Text.span>
        </FlexBox>
      </FlexBox>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, FlexBoxProvider };
