import { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { IBaseProps } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Table component.
 *
 * @interface ITableProps
 * @type {ITableProps}
 * @public
 * @since 0.47.0
 */
export interface ITableProps extends Omit<IBaseProps, 'border'>, TableHTMLAttributes<HTMLTableElement> {
  /**
   * Specifies a caption for the table. The caption provides additional context or a brief description of the table's content, helping users understand its purpose or meaning.
   *
   * @type {JSX.Element | string}
   * @public
   * @since 0.47.0
   */
  caption?: JSX.Element | string;
  /**
   * Defines the spacing between rows in the table. The girth property controls the vertical spacing between rows, enhancing readability.
   *
   * @type {'sm' | 'md' | 'lg'}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'sm' | 'md' | 'lg';

  /**
   * Determines whether the table rows should have a striped appearance.
   * Striped rows alternate background colors between consecutive rows, making it easier for users to distinguish between different rows of data.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isStriped?: boolean;
}
/**
 * @private
 */
export interface ITrProps extends IBaseProps, HTMLAttributes<HTMLTableRowElement> {}

/**
 * Interface for configuring props for the Table Header Cell component (Th).
 *
 * @interface IThProps
 * @type {IThProps}
 * @public
 * @since 0.47.0
 */
export interface IThProps extends IBaseProps, ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Specifies the alignment of the text within the table header cell.
   * The align property controls the horizontal alignment of the text content within the cell.
   *
   * @type {'left' | 'center' | 'right'}
   * @default left
   * @public
   * @since 0.47.0
   */
  align?: 'left' | 'center' | 'right';
}

/**
 * Interface for configuring props for the Table Data Cell component (Td).
 *
 * @interface ITdProps
 * @type {ITdProps}
 * @public
 * @since 0.47.0
 */
export interface ITdProps extends IBaseProps, TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Specifies the alignment of the text within the table data cell.
   * The align property controls the horizontal alignment of the text content within the cell.
   *
   * @type {'left' | 'center' | 'right'}
   * @default left
   * @public
   * @since 0.47.0
   */
  align?: 'left' | 'center' | 'right';
}
