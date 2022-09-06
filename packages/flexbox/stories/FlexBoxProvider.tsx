import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from '@tidy-ui/button';
import { color, css, hsla, styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/text';
import { IBaseProps } from '@tidy-ui/types';
import { FlexBox } from '../src';
import { IFlexBoxProps, IFlexItemProps } from '../src/types';

const baseCount = 24;

const Ctx = React.createContext({ count: baseCount });

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
          background-color: ${hsla(color.amber[900], 0.2)};
          color: ${hsla(color.amber[300])}; ;
        `
      : css`
          background-color: ${hsla(color.amber[100], 0.8)};
          color: ${hsla(color.amber[900])};
        `}
`;

const LabelFlexItem = styled(FlexBox.Item)<IFlexItemProps>`
  position: relative;
  height: 24px;
  width: 24px;
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
        <ButtonToolbar>
          <ButtonGroup>
            <Button variant="outlined" onClick={increment} w="4rem">
              Add
            </Button>
            <Button variant="outlined" onClick={decrement} w="4rem">
              Remove
            </Button>
          </ButtonGroup>
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset ({count})
          </Button>
        </ButtonToolbar>
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
