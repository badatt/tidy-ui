import React, { createContext, useState } from 'react';
import { amber, css, hsla, red, styled } from '@tidy-ui/commons';
import { Button, ButtonGroup, Text } from '@tidy-ui/presentation';
import { IBaseProps } from '@tidy-ui/types';
import { FlexBox, FlexItem } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

const baseCount = 24;

const Ctx = createContext({ count: baseCount });

/** @internal */
export interface IFlexBoxProvider extends IBaseProps {
  /** @internal */
  size?: number;
}

const LabelFlexBox = styled(FlexBox)<IFlexBoxProps>`
  overflow: auto;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(amber[900], 0.2)};
          color: ${hsla(amber[300])}; ;
        `
      : css`
          background-color: ${hsla(amber[100], 0.8)};
          color: ${hsla(amber[900])};
        `}
`;

const LabelFlexItem = styled(FlexItem)<IFlexItemProps>`
  position: relative;
  height: 24px;
  width: 24px;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(red[900], 0.2)};
          border: 1px dashed ${hsla(red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(red[100], 0.8)};
          border: 1px dashed ${hsla(red[400], 0.5)};
        `}
`;

/** @internal */
const FlexBoxProvider = ({ children, size }: IFlexBoxProvider) => {
  const [count, setCount] = useState(size || baseCount);

  /** @internal */
  const increment = () => setCount(count + 1);
  /** @internal */
  const decrement = () => count > 1 && setCount(count - 1);
  /** @internal */
  const reset = () => setCount(size || baseCount);
  return (
    <Ctx.Provider value={{ count }}>
      <FlexBox jsc="space-between" alc="center">
        <ButtonGroup>
          <Button variant="outlined" onClick={increment}>
            Add
          </Button>
          <Button variant="outlined" onClick={decrement}>
            Remove
          </Button>
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset ({count})
          </Button>
        </ButtonGroup>
        <FlexBox gap="0.5rem" ali="center">
          <LabelFlexBox h="24px" w="24px" />
          <Text>FlexBox</Text>
          <LabelFlexItem />
          <Text>FlexItem</Text>
        </FlexBox>
      </FlexBox>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, FlexBoxProvider };
