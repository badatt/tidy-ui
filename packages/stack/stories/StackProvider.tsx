import React from 'react';
import { Button, ButtonCluster, ButtonGroup } from '../../button/src';
import { IBaseProps } from '../../types/src';

const baseCount = 10;

const Ctx = React.createContext({ count: baseCount });

/** @internal */
export interface IStackProvider extends IBaseProps {
  /** @internal */
  size?: number;
}

/** @internal */
const StackProvider = ({ children, size }: IStackProvider) => {
  const [count, setCount] = React.useState(size || baseCount);

  /** @internal */
  const increment = () => setCount(count + 1);
  /** @internal */
  const decrement = () => count > 1 && setCount(count - 1);
  /** @internal */
  const reset = () => setCount(size || baseCount);
  return (
    <Ctx.Provider value={{ count }}>
      <ButtonCluster>
        <ButtonGroup>
          <Button onClick={increment} w="4rem">
            Add
          </Button>
          <Button onClick={decrement} w="4rem">
            Remove
          </Button>
        </ButtonGroup>
        <Button variant="simple" tone="danger" onClick={reset}>
          Reset ({count})
        </Button>
      </ButtonCluster>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, StackProvider };
