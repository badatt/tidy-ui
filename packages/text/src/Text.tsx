import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { TextLink, TextRoot } from './components';
import { ITextProps } from './types';

/** @internal */
type ITextVariant = React.ForwardRefExoticComponent<Omit<ITextProps, 'v'> & React.RefAttributes<HTMLElement>>;

/** @internal */
type ITextBase = React.ForwardRefExoticComponent<ITextProps & React.RefAttributes<HTMLElement>>;

/** @internal */
interface IText {
  /** @internal */
  base: ITextBase;
  /** @internal */
  body1: ITextVariant;
  /** @internal */
  body2: ITextVariant;
  /** @internal */
  caption: ITextVariant;
  /** @internal */
  h1: ITextVariant;
  /** @internal */
  h2: ITextVariant;
  /** @internal */
  h3: ITextVariant;
  /** @internal */
  h4: ITextVariant;
  /** @internal */
  h5: ITextVariant;
  /** @internal */
  h6: ITextVariant;
  /** @internal */
  hero: ITextVariant;
  /** @internal */
  p: ITextVariant;
  /** @internal */
  span: ITextVariant;
  /** @internal */
  subtitle1: ITextVariant;
  /** @internal */
  subtitle2: ITextVariant;
  /** @internal */
  title1: ITextVariant;
  /** @internal */
  title2: ITextVariant;
}

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const TextBase = React.forwardRef<HTMLElement, ITextProps>((props, ref) => {
  const { children, v, href, ...rest } = props;

  return (
    <TextRoot role="contentinfo" ref={ref} v={v} {...rest}>
      {children}
      {href && (
        <TextLink role="link" href={href}>
          <Icon.Link />
        </TextLink>
      )}
    </TextRoot>
  );
});

/** @internal */
const wrapper = (p: Partial<Pick<ITextProps, 'v' | 'as'>>) => () =>
  React.forwardRef<HTMLElement, Omit<ITextProps, 'v'>>((props, ref) => {
    return React.cloneElement(<TextBase as={p.as} v={p.v} />, { ...props, ref });
  });

/** @internal */
const baseWrapper = () => () =>
  React.forwardRef<HTMLElement, ITextProps>((props, ref) => {
    return React.cloneElement(<TextBase as="div" />, { ...props, ref });
  });

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const Text: IText = {
  base: baseWrapper()(),
  body1: wrapper({ as: 'p', v: 'body1' })(),
  body2: wrapper({ as: 'p', v: 'body2' })(),
  caption: wrapper({ as: 'span', v: 'caption' })(),
  h1: wrapper({ as: 'h1', v: 'h1' })(),
  h2: wrapper({ as: 'h2', v: 'h2' })(),
  h3: wrapper({ as: 'h3', v: 'h3' })(),
  h4: wrapper({ as: 'h4', v: 'h4' })(),
  h5: wrapper({ as: 'h5', v: 'h5' })(),
  h6: wrapper({ as: 'h6', v: 'h6' })(),
  hero: wrapper({ as: 'h1', v: 'hero' })(),
  p: wrapper({ as: 'p', v: 'p' })(),
  span: wrapper({ as: 'span', v: 'span' })(),
  subtitle1: wrapper({ as: 'h4', v: 'subtitle1' })(),
  subtitle2: wrapper({ as: 'h5', v: 'subtitle2' })(),
  title1: wrapper({ as: 'h2', v: 'title1' })(),
  title2: wrapper({ as: 'h3', v: 'title2' })(),
};

TextBase.defaultProps = {
  bld: false,
  cc: false,
  ctr: false,
  dsb: false,
  exd: false,
  itl: false,
  lc: false,
  stk: false,
  tnc: false,
  uc: false,
  udl: false,
  v: 'body1',
};

TextBase.displayName = 'Text';

export { Text, TextBase };
