import React from 'react';
import { BadgeRoot } from './components';
import { IBadgeProps } from './types';

const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>((props, ref) => {
  const { children, ele, content, max, hidden, isShow0, isDotted, ...rest } = props;

  const { anchorData, isAnchorInvisible } = React.useMemo(() => {
    let isAnchorInvisible = hidden;
    let anchorData = content;
    if (!isDotted && content === undefined) {
      isAnchorInvisible = true;
    }
    if (max && Number(content) > max) {
      anchorData = `${max}+`;
    }
    if (!isAnchorInvisible && anchorData == 0) {
      if (!isShow0) isAnchorInvisible = true;
    }
    return { anchorData, isAnchorInvisible };
  }, [content, isShow0]);

  return (
    <BadgeRoot
      ref={ref}
      role="contentinfo"
      content={anchorData}
      isDotted={isDotted}
      hidden={isAnchorInvisible}
      {...rest}
    >
      {ele ? React.cloneElement(ele, {}, children) : children}
    </BadgeRoot>
  );
});

Badge.defaultProps = {
  isBlink: false,
  isDotted: false,
  isOutlined: false,
  isShow0: false,
  max: 99,
  tone: 'neutral',
};

Badge.displayName = 'Badge';

export { Badge };
