import React from 'react';
import { Button, ButtonGroup } from '@tidy-ui/button';
import { IBaseProps } from '@tidy-ui/types';

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
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, StackProvider };
