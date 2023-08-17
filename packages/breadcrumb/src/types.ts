import { AnchorHTMLAttributes, HTMLAttributes, MouseEvent } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * Interface defining properties for configuring a Breadcrumb component.
 *
 * @interface IBreadcrumbProps
 * @type {IBreadcrumbProps}
 * @public
 * @since 0.47.0
 */
export interface IBreadcrumbProps extends IBaseProps, HTMLAttributes<HTMLOListElement> {
  /**
   * An optional property that determines whether the last item in the breadcrumb is set as inactive.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isLastItemNotActive?: boolean;

  /**
   * An optional property that limits the number of items displayed within the breadcrumb.
   *
   * @type {number}
   * @default Number.MAX_SAFE_INTEGER
   * @public
   * @since 0.47.0
   */
  limit?: number;

  /**
   * An optional callback function triggered when the collapsed breadcrumb is expanded.
   *
   * @type {Function}
   * @public
   * @since 0.47.0
   */
  onExpand?: (event: MouseEvent) => void;

  /**
   * An optional property defining the separator used between breadcrumb items. The default separator is '/'.
   *
   * @type {string | JSX.Element}
   * @default '/'
   * @public
   * @since 0.47.0
   */
  separator?: string | JSX.Element;

  /**
   * An optional property that sets the visual tone for the appearance of the `BreadcrumbItem`.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}

/**
 * Interface defining properties for configuring an individual BreadcrumbItem component.
 *
 * @interface IBreadcrumbItemProps
 * @type {IBreadcrumbItemProps}
 * @public
 * @since 0.47.0
 */
export interface IBreadcrumbItemProps extends IBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * An optional property that determines whether the current breadcrumb item is set as active.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isActive?: boolean;

  /**
   * An optional property that sets the visual tone for the appearance of the breadcrumb item. The default tone is `neutral`.
   *
   * @type {?TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
