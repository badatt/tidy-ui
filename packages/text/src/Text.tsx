import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { htmlElement, TextLink, TextRoot } from './components';
import { ITextProps } from './types';

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const Text = React.forwardRef<HTMLElement, ITextProps>((props, ref) => {
  const { children, v, href, ...rest } = props;
  const ele = htmlElement({ v });

  return (
    <TextRoot role="contentinfo" ref={ref} as={ele} v={v} {...rest}>
      {children}
      {href && (
        <TextLink role="link" href={href}>
          <Icon
            ele={<Icon.Link />}
            height="0.9em"
            width="0.9em"
            style={{ transform: 'translate(0, 0.175em) rotate(-45deg)' }}
          />
        </TextLink>
      )}
    </TextRoot>
  );
});

Text.defaultProps = {
  bld: false,
  cc: false,
  ctr: false,
  dsb: false,
  exd: false,
  itl: false,
  lc: false,
  tnc: false,
  uc: false,
  udl: false,
  v: 'body2',
};

Text.displayName = 'Text';

export { Text };
