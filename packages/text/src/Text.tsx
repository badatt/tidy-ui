import React, { forwardRef } from 'react';
import { htmlElement, TextLink, TextLinkIcon, TextRoot } from './components';
import { ITextProps } from './types';

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const Text = forwardRef<HTMLDivElement, ITextProps>((props, ref) => {
  const { children, is, href, ...rest } = props;
  const ele = htmlElement({ is });

  return (
    <TextRoot role="text" ref={ref} is={ele} {...rest}>
      {children}
      {href && (
        <TextLink role="text-link" href={href}>
          <TextLinkIcon />
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
  is: 'body2',
  itl: false,
  lc: false,
  tnc: false,
  uc: false,
  udl: false,
};

export { Text };
