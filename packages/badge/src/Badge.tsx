import React, { forwardRef, useEffect, useState } from 'react';
import { BadgeRoot } from './components';
import { IBadgeProps } from './types';

/**
 * Badge component that can display a data value or a dot on top right corner of
 * the child component
 *
 */
const Badge = forwardRef<HTMLSpanElement, IBadgeProps>((props, ref) => {
  const { children, className, data, max, hidden, show0, dotted, ...rest } = props;

  const [anchorData, setAnchorData] = useState(data);
  const [isAnchorInvisible, setIsAnchorInvisible] = useState(hidden);

  useEffect(() => {
    if (!dotted && data === undefined) {
      setIsAnchorInvisible(true);
    }
    if (max && Number(data) > max) {
      setAnchorData(`${max}+`);
    }
  }, [data]);

  useEffect(() => {
    if (!isAnchorInvisible && anchorData == 0) {
      if (!show0) setIsAnchorInvisible(true);
    }
  }, [show0, anchorData]);

  return (
    <BadgeRoot
      className={className}
      ref={ref}
      role="contentinfo"
      data={anchorData}
      isDotted={dotted}
      isInvisible={isAnchorInvisible}
      {...rest}
    >
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
