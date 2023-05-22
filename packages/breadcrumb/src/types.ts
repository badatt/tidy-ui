import { AnchorHTMLAttributes, HTMLAttributes, MouseEvent } from 'react';
import { TTone } from '@tidy-ui/commons';
import { IBaseProps } from '@tidy-ui/types';

/**
 * BreadCrumb props
 */
export interface IBreadcrumbProps extends IBaseProps, HTMLAttributes<HTMLOListElement> {
  /**
   * If `true`, WON'T set the last time as active
   *
   * @default false
   */
  isLastItemNotActive?: boolean;

  /**
   * Limit the number of items in the breadcrumb
   *
   */
  limit?: number;

  /**
   * callback when the collapsed breadcrumb got expanded
   */
  onExpand?: (event: MouseEvent) => void;

  /**
   * Separator for breadcrumb items
   *
   * @default '/'
   */
  separator?: string | React.ReactNode;

  /**
   * Sets the tone fo the BreadcrumbItem
   *
   * @type {?TTone}
   * @default 'major'
   */
  tone?: TTone;
}

/**
 * BreadCrumbItem props
 */
export interface IBreadcrumbItemProps extends IBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Sets the current breadcrumb item active
   *
   * @default false
   */
  isActive?: boolean;

  /**
   * Sets the tone fo the BreadcrumbItem
   *
   * @type {?TTone}
   * @default undefined
   */
  tone?: TTone;
}
