import React from 'react';
import { BadgeRoot } from './components';
import { IBadgeProps } from './types';

/**
 * Badge can used to display data value or a dot on top right corner of
 * the child component (usually an Icon). Badge qualifies the underlying component.
 *
 */
const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>((props, ref) => {
  const { children, data, max, hidden, show0, dotted, ...rest } = props;

  const [anchorData, setAnchorData] = React.useState(data);
  const [isAnchorInvisible, setIsAnchorInvisible] = React.useState(hidden);

  React.useEffect(() => {
    if (!dotted && data === undefined) {
      setIsAnchorInvisible(true);
    }
    if (max && Number(data) > max) {
      setAnchorData(`${max}+`);
    }
  }, [data]);

  React.useEffect(() => {
    if (!isAnchorInvisible && anchorData == 0) {
      if (!show0) setIsAnchorInvisible(true);
    }
  }, [show0, anchorData]);

  return (
    <BadgeRoot ref={ref} role="contentinfo" data={anchorData} dotted={dotted} hidden={isAnchorInvisible} {...rest}>
      {children}
    </BadgeRoot>
  );
});

Badge.defaultProps = {
  blink: false,
  dotted: false,
  hidden: false,
  max: 99,
  outlined: false,
  show0: false,
  tone: 'major',
};

export { Badge };
