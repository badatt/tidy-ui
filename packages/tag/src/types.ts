import { HTMLAttributes } from 'react';
import { IBaseProps, IClosable, TTone } from '@tidy-ui/types';

/**
 * Interface for configuring props for the Tag component, which represents a visually distinct label or marker.
 *
 * @interface ITagProps
 * @type {ITagProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ITagProps extends IBaseProps, IClosable, HTMLAttributes<HTMLDivElement> {
  /**
   * The girth property controls the visual size of the Tag component, allowing you to adjust its prominence within its container or context.
   * Use a smaller girth for tags in compact spaces or a larger girth for tags that need to stand out.
   *
   * @type {'sm' | 'md' | 'lg'}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'sm' | 'md' | 'lg';

  /**
   * The icon property enables the addition of an icon to the Tag component, contributing an extra layer of visual information.
   * Enhance the tag's meaning or indicate its category with an associated icon.
   *
   * @type {JSX.Element}
   * @public
   * @since 0.47.0
   */
  icon?: JSX.Element;

  /**
   * The isFilled property determines whether the Tag component should have a filled or outlined appearance.
   * Utilize filled tags for emphasis or outlined tags for subtle categorization.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isFilled?: boolean;

  /**
   * The tone property lets you apply color variations to the Tag component to convey different levels of importance or meaning.
   * Apply distinct tones to tags representing different priority levels or content categories.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}

/**
 * Interface for configuring props for a group of tags.
 *
 * @interface ITagGroupProps
 * @type {ITagGroupProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ITagGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The girth property controls the overall size of the TagGroup component, affecting its visual presence in the layout.
   * Choose a smaller girth for a compact tag group, or a larger girth for a more prominent tag group.
   *
   * @type {'sm' | 'md' | 'lg'}
   * @default md
   * @public
   * @since 0.47.0
   */
  girth?: 'sm' | 'md' | 'lg';

  /**
   * The onAddNewTag callback is triggered when a new tag is added to the group, providing an opportunity to handle the addition.
   * Implement custom logic to respond to tag additions, such as updating data or triggering actions.
   *
   * @type {Function}
   * @public
   * @since 0.47.0
   */
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onAddNewTag?: (v: any) => void;

  /**
   * The tone property allows you to customize the color variant of the "add new tag" button.
   * Apply different tones to indicate different actions or emphasize the "add new tag" button.
   *
   * @type {TTone}
   * @default neutral
   * @public
   * @since 0.47.0
   */
  tone?: TTone;
}
