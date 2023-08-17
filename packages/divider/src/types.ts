import { HTMLAttributes } from 'react';
import { IBaseProps, TBorderStyle, TDensity, TShade, TTone } from '@tidy-ui/types';

/**
 * The IDividerProps interface is your gateway to crafting elegant and customizable dividers that seamlessly integrate into your user interface. With a host of options to choose from, you can effortlessly create dividers that enhance both the visual appeal and user experience of your application.
 *
 * @interface IDividerProps
 * @type {IDividerProps}
 * @public
 * @since 0.47.0
 */
export interface IDividerProps extends IBaseProps, HTMLAttributes<HTMLHRElement> {
  /**
   * The align property allows you to control the vertical alignment of your divider.
   * Whether you want it centered, aligned at the start, or at the end, this property ensures that your divider blends seamlessly with the surrounding elements.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  align?: 'center' | 'start' | 'end';

  /**
   * The density property lets you determine the thickness of your divider.
   * Choose from predefined density values like 'thin', 'medium', or 'thick' to achieve the desired visual impact.
   *
   * @type {TDensity}
   * @default thin
   * @public
   * @since 0.47.0
   */
  density?: TDensity;

  /**
   * The isVertical property introduces vertical dividers to your arsenal. When set to true, this property allows you to create dividers that separate content vertically, adding depth and organization to your layout.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isVertical?: boolean;

  /**
   * The length property provides control over the height (for vertical dividers) or width (for horizontal dividers) of your divider.
   * Use this property to fine-tune the dimensions of your divider to perfectly match your design.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  length?: string;

  /**
   * With the shade property, you can adjust the color intensity of your divider.
   * Choose from a range of shade values, from low to high, to seamlessly integrate the divider into your chosen color scheme.
   *
   * @type {TShade}
   * @public
   * @since 0.47.0
   */
  shade?: TShade;

  /**
   * The tone property enables you to set the color tone of your divider. Whether you opt for a 'major', 'minor', or etc. tone, your divider will align harmoniously with your design language.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * The variant property lets you experiment with different divider styles. Choose from options like 'solid', 'dashed', 'dotted' etc. to achieve the desired visual effect.
   *
   * @type {TBorderStyle}
   * @default solid
   * @public
   * @since 0.47.0
   */
  variant?: TBorderStyle;
}

/**
 * IEnhancedDividerProps interface – a treasure trove of properties that allow you to craft stunning dividers that enhance both the aesthetics and organization of your user interface. With an array of options at your fingertips, you have the power to create dividers that truly stand out.
 *
 * @interface IDividerProps
 * @type {IDividerProps}
 * @public
 * @since 0.47.0
 */
export interface IEnhancedDividerProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The density property empowers you to control the thickness of your divider.
   * Choose from preset density values such as 'thin', 'medium', or 'thick' to achieve the desired visual impact and separation.
   *
   * @type {TDensity}
   * @default thin
   * @public
   * @since 0.47.0
   */
  density?: TDensity;

  /**
   * The justify property gives you precise control over the horizontal alignment of your divider. Whether you want it centered, aligned at the start, or at the end, this property ensures that your divider seamlessly fits within its intended context.
   *
   * @type {'center' | 'start' | 'end'}
   * @default center
   * @public
   * @since 0.47.0
   */
  justify?: 'center' | 'start' | 'end';

  /**
   * With the shade property, you have the ability to fine-tune the color intensity of your divider. Choose from a range of shade values, from subtle to bold, to perfectly match the tone of your application's color scheme.
   *
   * @type {TShade}
   * @public
   * @since 0.47.0
   */
  shade?: TShade;

  /**
   * The tone property lets you set the color tone of your divider. Whether it's a 'major', 'minor' etc. tone, your divider will effortlessly blend into your design language while adding a touch of visual distinction.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * The variant property provides you with the ability to experiment with different divider styles. Choose from options like 'solid', 'dashed', 'dotted' etc. to achieve the perfect visual effect for your specific design.
   *
   * @type {TBorderStyle}
   * @default solid
   * @public
   * @since 0.47.0
   */
  variant?: TBorderStyle;
}
