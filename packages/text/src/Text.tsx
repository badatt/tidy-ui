import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { htmlElement, TextLink, TextRoot } from './components';
import { ITextProps } from './types';

/** @internal */
type ITextBase = React.ForwardRefExoticComponent<Omit<ITextProps, 'v'> & React.RefAttributes<HTMLElement>>;

/** @internal */
interface IText {
  /** @internal */
  body1: ITextBase;
  /** @internal */
  body2: ITextBase;
  /** @internal */
  caption: ITextBase;
  /** @internal */
  h1: ITextBase;
  /** @internal */
  h2: ITextBase;
  /** @internal */
  h3: ITextBase;
  /** @internal */
  h4: ITextBase;
  /** @internal */
  h5: ITextBase;
  /** @internal */
  h6: ITextBase;
  /** @internal */
  hero: ITextBase;
  /** @internal */
  p: ITextBase;
  /** @internal */
  span: ITextBase;
  /** @internal */
  subtitle1: ITextBase;
  /** @internal */
  subtitle2: ITextBase;
  /** @internal */
  title1: ITextBase;
  /** @internal */
  title2: ITextBase;
}

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const TextBase = React.forwardRef<HTMLElement, ITextProps>((props, ref) => {
  const { children, v, href, ...rest } = props;
  const ele = htmlElement({ v });

  return (
    <TextRoot role="contentinfo" ref={ref} as={ele} v={v} {...rest}>
      {children}
      {href && (
        <TextLink role="link" href={href}>
          <Icon ele={<Icon.Link />} h="0.9em" w="0.9em" style={{ transform: 'translate(0, 0.175em) rotate(-45deg)' }} />
        </TextLink>
      )}
    </TextRoot>
  );
});

/** @internal */
const wrapper = (p: Pick<ITextProps, 'v'>) => () =>
  React.forwardRef<HTMLElement, Omit<ITextProps, 'v'>>((props, ref) => {
    return React.cloneElement(<TextBase v={p.v} />, { ...props, ref });
  });

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const Text: IText = {
  body1: wrapper({ v: 'body1' })(),
  body2: wrapper({ v: 'body2' })(),
  caption: wrapper({ v: 'caption' })(),
  h1: wrapper({ v: 'h1' })(),
  h2: wrapper({ v: 'h2' })(),
  h3: wrapper({ v: 'h3' })(),
  h4: wrapper({ v: 'h4' })(),
  h5: wrapper({ v: 'h5' })(),
  h6: wrapper({ v: 'h6' })(),
  hero: wrapper({ v: 'hero' })(),
  p: wrapper({ v: 'p' })(),
  span: wrapper({ v: 'span' })(),
  subtitle1: wrapper({ v: 'subtitle1' })(),
  subtitle2: wrapper({ v: 'subtitle2' })(),
  title1: wrapper({ v: 'title1' })(),
  title2: wrapper({ v: 'title2' })(),
};

TextBase.defaultProps = {
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

TextBase.displayName = 'Text';

export { Text, TextBase };
