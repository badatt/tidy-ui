import React, { forwardRef, useEffect, useState } from 'react';
import { BadgeRoot } from './components';
import { IBadgeProps } from './types';

/**
 * Badge component that can display a data value or a dot on top right corner of
 * the child component
 *
 */
const Badge = forwardRef<HTMLSpanElement, IBadgeProps>((props, ref) => {
  const { children, className, withData, withMax, isInvisible, isShowZero, isDotted, ...rest } = props;

  const [anchorData, setAnchorData] = useState(withData);
  const [isAnchorInvisible, setIsAnchorInvisible] = useState(isInvisible);

  useEffect(() => {
    if (!isDotted && withData === undefined) {
      setIsAnchorInvisible(true);
    }
    if (withMax && Number(withData) > withMax) {
      setAnchorData(`${withMax}+`);
    }
  }, [withData]);

  useEffect(() => {
    if (!isAnchorInvisible && anchorData == 0) {
      if (!isShowZero) setIsAnchorInvisible(true);
    }
  }, [isShowZero, anchorData]);

  return (
    <BadgeRoot
      className={className}
      ref={ref}
      role="badge"
      withData={anchorData}
      isDotted={isDotted}
      isInvisible={isAnchorInvisible}
      {...rest}
    >
      {children}
    </BadgeRoot>
  );
});

Badge.defaultProps = {
  isBlinking: false,
  isDotted: false,
  isInvisible: false,
  isOutlined: false,
  isShowZero: false,
  withColor: 'major',
  withMax: 99,
};

export { Badge };
