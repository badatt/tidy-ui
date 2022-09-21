import { AnchorHTMLAttributes, HTMLAttributes, MouseEvent } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * BreadCrumb props
 */
export interface IBreadcrumbProps extends IBaseProps, HTMLAttributes<HTMLOListElement> {
  /**
   * Limit the number of items in the breadcrumb
   *
   */
  limit?: number;

  /**
   * If `true`, WON'T set the last time as active
   *
   * @default false
   */
  noActive?: boolean;

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
 * BreadcrumbItemWrapper
 */
export interface IBreadCrumbItemWrapperProps extends IBaseProps, HTMLAttributes<Partial<HTMLLIElement>> {
  /**
   * Sets the tone fo the BreadcrumbItem
   *
   * @type {?TTone}
   * @default undefined
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
  active?: boolean;
}
