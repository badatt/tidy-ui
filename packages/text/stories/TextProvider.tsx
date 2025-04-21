import React from 'react';
import { Button, ButtonCluster, IconButton } from '../../button/src';
import { Icon } from '../../commons/src';
import { Text } from '../../text/src';
import { TextVariant } from '../../types/src';

const Ctx = React.createContext({ variant: TextVariant.body1 });

/** @internal */
const TextProvider = ({ children }) => {
  const [variant, setTextVariant] = React.useState(TextVariant.body1);

  /** @internal */
  const increment = () => variant < 15 && setTextVariant(variant + 1);
  /** @internal */
  const decrement = () => variant > 0 && setTextVariant(variant - 1);
  /** @internal */
  const reset = () => setTextVariant(TextVariant.body1);

  const memoised = React.useMemo(() => ({ variant }), [variant]);
  return (
    <Ctx.Provider value={memoised}>
      <ButtonCluster>
        <ButtonCluster>
          <IconButton
            variant="outlined"
            onClick={decrement}
            disabled={variant === 0}
            icon={<Icon.ExpandLess style={{ transform: 'rotate(-90deg)' }} />}
            isIconOnly
            girth="sm"
          />
          <Text.Body1 style={{ width: '4rem' }} ctr>
            {TextVariant[variant]}
          </Text.Body1>
          <IconButton
            variant="outlined"
            onClick={increment}
            disabled={variant === 15}
            icon={<Icon.ExpandLess style={{ transform: 'rotate(90deg)' }} />}
            isIconOnly
            girth="sm"
          />
        </ButtonCluster>
        <Button variant="simple" tone="danger" onClick={reset}>
          Reset ({TextVariant[TextVariant.body1]})
        </Button>
      </ButtonCluster>
      <br />
      {children}
    </Ctx.Provider>
  );
};

export { Ctx, TextProvider };
