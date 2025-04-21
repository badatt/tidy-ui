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
  Base: ITextBase;
  /** @internal */
  Body1: ITextVariant;
  /** @internal */
  Body2: ITextVariant;
  /** @internal */
  Caption: ITextVariant;
  /** @internal */
  H1: ITextVariant;
  /** @internal */
  H2: ITextVariant;
  /** @internal */
  H3: ITextVariant;
  /** @internal */
  H4: ITextVariant;
  /** @internal */
  H5: ITextVariant;
  /** @internal */
  H6: ITextVariant;
  /** @internal */
  Hero: ITextVariant;
  /** @internal */
  P: ITextVariant;
  /** @internal */
  Span: ITextVariant;
  /** @internal */
  Subtitle1: ITextVariant;
  /** @internal */
  Subtitle2: ITextVariant;
  /** @internal */
  Title1: ITextVariant;
  /** @internal */
  Title2: ITextVariant;
}

/**
 * Text component has all the typography that you need on a page. USe this to represent
 * any text data you want to handle on a page. Powered by various styles (with theming) and settings
 *
 */
const TextBase = React.forwardRef<HTMLElement, ITextProps>((props, ref) => {
  const { children, v, href, ...rest } = props;

  return (
    <TextRoot ref={ref} v={v} {...rest}>
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
  Base: baseWrapper()(),
  Body1: wrapper({ as: 'p', v: 'body1' })(),
  Body2: wrapper({ as: 'p', v: 'body2' })(),
  Caption: wrapper({ as: 'span', v: 'caption' })(),
  H1: wrapper({ as: 'h1', v: 'h1' })(),
  H2: wrapper({ as: 'h2', v: 'h2' })(),
  H3: wrapper({ as: 'h3', v: 'h3' })(),
  H4: wrapper({ as: 'h4', v: 'h4' })(),
  H5: wrapper({ as: 'h5', v: 'h5' })(),
  H6: wrapper({ as: 'h6', v: 'h6' })(),
  Hero: wrapper({ as: 'h1', v: 'hero' })(),
  P: wrapper({ as: 'p', v: 'p' })(),
  Span: wrapper({ as: 'span', v: 'span' })(),
  Subtitle1: wrapper({ as: 'h4', v: 'subtitle1' })(),
  Subtitle2: wrapper({ as: 'h5', v: 'subtitle2' })(),
  Title1: wrapper({ as: 'h2', v: 'title1' })(),
  Title2: wrapper({ as: 'h3', v: 'title2' })(),
};

TextBase.defaultProps = {
  v: 'body1',
};

TextBase.displayName = 'Text';

export { Text, TextBase };
