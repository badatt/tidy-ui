import { HTMLAttributes } from 'react';
import { IBaseProps, TTextVariant, TTone } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Text component, representing stylized text content.
 *
 * @interface ITextProps
 * @type {ITextProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ITextProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The bld property controls whether the text should be displayed in bold style.
   * Apply bold formatting to emphasize specific content within the text.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  bld?: boolean;

  /**
   * The cc property determines whether the text should be displayed in camel case (CamelCase).
   * Utilize camel case text for special formatting or stylistic requirements.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  cc?: boolean;

  /**
   * The ctr property centers the text horizontally within its container.
   * Center align text to improve visual presentation and layout.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  ctr?: boolean;

  /**
   * The dsb property displays the text in a disabled state.
   * Indicate that the text is not interactive or temporarily unavailable.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  dsb?: boolean;

  /**
   * The exd property stretches the text to the full width of its container.
   * Expand text to fill available space, especially in layout designs.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  exd?: boolean;

  /**
   * The href property specifies a link URL for the text, making it clickable.
   * Create clickable text that navigates to a related page or resource.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  href?: string;

  /**
   * The itl property displays the text in italic style.
   * Apply italics for emphasis or distinct visual styling.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  itl?: boolean;

  /**
   * The lc property displays the text in lowercase.
   * Convert text to lowercase for consistent styling or formatting.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  lc?: boolean;

  /**
   * The stk property adds a strikethrough style to the text.
   * Indicate that the text represents content that has been removed or is no longer valid.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  stk?: boolean;

  /**
   * The tnc property truncates the text inside the width of its parent component.
   * Prevent long text from overflowing and maintain a neat appearance.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  tnc?: boolean;

  /**
   * The tone property sets the color tone of the text.
   * Apply different color variations to convey meaning or importance.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * The uc property displays the text in uppercase.
   * Convert text to uppercase for headings or branding.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  uc?: boolean;

  /**
   * The udl property adds an underline style to the text.
   * Highlight text that represents links or interactive elements.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  udl?: boolean;

  /**
   * The v property specifies the HTML element variant for the text, affecting its semantic meaning.
   * Choose the appropriate HTML element to convey the purpose or importance
   *
   * @type {TTextVariant}
   * @default body1
   * @public
   * @since 0.47.0
   */
  v?: TTextVariant;
}

/**
 * Interface for configuring props for the DataField component, representing a labeled data entry.
 *
 * @interface IDataFieldProps
 * @type {IDataFieldProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IDataFieldProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The acc property determines the accent color for the field label, visually highlighting it.
   * Apply an accent color to draw attention to the label or differentiate it from other content.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  acc?: TTone;

  /**
   * The dsb property controls whether the value of the data field is displayed in a disabled state.
   * Indicate that the data field value is read-only or inactive.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  dsb?: boolean;

  /**
   * The lbl property specifies the label of the data field, providing context or a title for the associated value.
   * Assign a label to describe the data being displayed, such as "Name", "Age", or "Total Sales".
   *
   * @type {string | number | JSX.Element}
   * @public
   * @since 0.47.0
   */
  lbl?: string | number | JSX.Element;

  /**
   * The tone property sets the color tone of the value in the data field.
   * Apply color variations to convey meaning, significance, or status to the data field value.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  tone?: TTone;

  /**
   * The val property defines the value displayed in the data field, representing associated data or information.
   * Display actual data or content that corresponds to the label, such as a name, number, or custom element.
   *
   * @type {string | number | JSX.Element}
   * @public
   * @since 0.47.0
   */
  val?: string | number | JSX.Element;
}
