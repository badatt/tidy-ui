import React from 'react';
import { Button, ButtonCluster, IconButton } from '../../button/src';
import { Icon } from '../../commons/src';
import { Text } from '../../text/src';
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
      <ButtonCluster>
        <ButtonCluster>
          <IconButton
            variant="outlined"
            onClick={decrement}
            disabled={variant === 0}
            icon={<Icon.ExpandLess style={{ transform: 'rotate(-90deg)' }} />}
            iconOnly
            size="sm"
          />
          <Text.body1 style={{ width: '4rem' }} ctr>
            {Variant[variant]}
          </Text.body1>
          <IconButton
            variant="outlined"
            onClick={increment}
            disabled={variant === 15}
            icon={<Icon.ExpandLess style={{ transform: 'rotate(90deg)' }} />}
            iconOnly
            size="sm"
          />
        </ButtonCluster>
        <Button variant="simple" tone="danger" onClick={reset}>
          Reset ({Variant[Variant.body1]})
        </Button>
      </ButtonCluster>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, TextProvider };
