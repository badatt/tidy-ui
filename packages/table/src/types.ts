import { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { TGirth } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * TableGirth
 */
type TableGirth = Extract<TGirth, 'sm' | 'md' | 'lg'>;

/**
 * TableContext props
 */
export interface ITableContext {
  /** @internal */
  activeIndex: number;

  /** @internal */
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;

  /** @internal */
  setTableHeight: React.Dispatch<React.SetStateAction<string>>;

  /** @internal */
  tableHeight: string;
}

/**
 * TableProps
 */
export interface ITableProps extends Omit<IBaseProps, 'border'>, TableHTMLAttributes<HTMLTableElement> {
  /**
   * Spacing between rows
   *
   * @default 'md'
   */
  girth?: TableGirth;

  /**
   * If `true`, creates striped table rows
   */
  isStriped?: boolean;
}
/**
 * TrProps
 */
export interface ITrProps extends IBaseProps, HTMLAttributes<HTMLTableRowElement> {}
/**
 * ThProps
 */
export interface IThProps extends IBaseProps, ThHTMLAttributes<HTMLTableCellElement> {}
/**
 * TdProps
 */
export interface ITdProps extends IBaseProps, TdHTMLAttributes<HTMLTableCellElement> {}
