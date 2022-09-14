import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from '@tidy-ui/button';
import { Icon } from '@tidy-ui/commons';
import { Variant } from '../src/types';

const Ctx = React.createContext({ variant: Variant.body1 });

/** @internal */
const TextProvider = ({ children }) => {
  const [variant, setVariant] = React.useState(Variant.body1);

  /** @internal */
  const increment = () => variant < 15 && setVariant(variant + 1);
  /** @internal */
  const decrement = () => variant > 0 && setVariant(variant - 1);
  /** @internal */
  const reset = () => setVariant(Variant.body1);
  return (
    <Ctx.Provider value={{ variant }}>
      <ButtonToolbar>
        <ButtonGroup>
          <Button variant="outlined" onClick={decrement} disabled={variant === 0}>
            <Icon ele={<Icon.ExpandLess />} style={{ transform: 'rotate(-45deg)' }} />
          </Button>
          <Button disabled w="5rem">
            {Variant[variant]}
          </Button>
          <Button variant="outlined" onClick={increment} disabled={variant === 15}>
            <Icon ele={<Icon.ExpandLess />} style={{ transform: 'rotate(45deg)' }} />
          </Button>
        </ButtonGroup>
        <Button variant="simple" tone="danger" onClick={reset}>
          Reset ({Variant[Variant.body1]})
        </Button>
      </ButtonToolbar>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, TextProvider };
