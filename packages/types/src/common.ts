import { ElementType, HTMLAttributes } from 'react';

/**
 * Base props for Tidy UI components
 */
export interface IStandardProps {
  /**
   * css `background` equivalent
   */
  background?: string;

  /**
   * css `border` equivalent
   */
  border?: number | string;

  /**
   * css `clear` equivalent
   */
  clear?:
    | 'left'
    | 'right'
    | 'both'
    | 'inline-start'
    | 'inline-end'
    | 'block-start'
    | 'block-end'
    | 'top'
    | 'bottom'
    | 'none';

  /**
   * css `color` equivalent
   */
  color?: string;

  /**
   * css `disabled` equivalent
   */
  disabled?: boolean;

  /**
   * css `display` equivalent
   */
  display?:
    | 'none'
    | 'contents'
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'flow'
    | 'flow-root'
    | 'table'
    | 'inline-table'
    | 'table-row'
    | 'list-item'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

  /**
   * An optional property that allows you to provide a custom JSX element to be rendered within the component.
   * This can be used to add additional content or elements specific to the component.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  ele?: JSX.Element;

  /**
   * css `float` equivalent
   */
  float?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'none'
    | 'inline-start'
    | 'inline-end'
    | 'block-start'
    | 'block-end'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

  /**
   * css `font` equivalent
   */
  font?: string;

  /**
   * css `height` equivalent
   */
  height?: number | string;

  /**
   * css `margin` equivalent
   */
  margin?: string;

  /**
   * css `opacity` equivalent
   */
  opacity?: number;

  /**
   * css `overflow` equivalent
   */
  overflow?:
    | 'visible'
    | 'hidden'
    | 'clip'
    | 'scroll'
    | 'auto'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

  /**
   * css `padding` equivalent
   */
  padding?: string;

  /**
   * css `position` equivalent
   */
  position?:
    | 'static'
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

  /**
   * css `weight` equivalent
   */
  width?: number | string;
}

/**
 * Closable component
 */
export interface IClosable {
  /**
   * It `true`, creates a closable widget with a close button at top right corner
   *
   * @type {?boolean}
   * @default false
   */
  closable?: boolean;
  /**
   * If `true`, opens the component
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback (if any) after the widget is closed
   *
   * @type {?((e?: any | undefined) => void)}
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClose?: (e?: any) => void;
}

/**
 * Props with `as`
 */
export interface IBaseProps<A extends ElementType | string = ElementType> extends IStandardProps {
  /**
   * `as` a html tag component
   */
  as?: A;
}

/**
 * Common props for Icon components
 *
 * @typedef {IIconProps}
 * @interface IIconProps
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 */
export interface IIconProps extends HTMLAttributes<SVGElement> {
  /**
   * If `true`, creates an outlined icon
   *
   * @default false
   */
  isOutlined?: boolean;
}

/**
 * Creates array with length
 */
export type TCreateArrayWithLengthX<L extends number, A extends unknown[] = []> = A['length'] extends L
  ? A
  : TCreateArrayWithLengthX<L, [...A, 1]>;

/**
 * Numeric range type
 */
export type TNumericRange<S extends number[], E extends number, A extends number = never> = S['length'] extends E
  ? A | E
  : TNumericRange<[...S, 1], E, A | S['length']>;
