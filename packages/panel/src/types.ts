import { HTMLAttributes } from 'react';
import { IBaseProps, TTone } from '@tidy-ui/types';

/**
 * The IPanelProps interface provides you with a versatile set of properties to create interactive and dynamic panel components.
 * Whether you're creating collapsible sections, or informative containers, the properties offered by IPanelProps will help you craft
 * panels that enhance the layout and user experience of your application.
 *
 * @interface IPanelProps
 * @type {IPanelProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IPanelProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Control whether the panel is expanded or collapsed. When set to true, the panel is expanded.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isExpanded?: boolean;
}

/**
 * The IPanelHeaderProps interface provides you with a versatile toolkit to create interactive and dynamic panel headers.
 * Whether you're designing collapsible sections, expandable panels, or informative headers, the properties offered by IPanelHeaderProps will help you
 * craft header components that enhance the usability and aesthetic of your application.
 *
 * @interface IPanelHeaderProps
 * @type {IPanelHeaderProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IPanelHeaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Assign an accent color variant to the panel header, typically used to classify the information level or importance.
   * This accent color can help users quickly identify and associate the header with specific content or actions.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  accent?: TTone;

  /**
   * Control whether the panel header is expanded or collapsed. When set to true, the panel header is visually marked as expanded.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isExpanded?: boolean;

  /**
   * Display a toggle button on the panel header, allowing users to easily expand or collapse associated content.
   * This toggle button adds interactivity and enhances user control over panel visibility.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isToggleVisible?: boolean;
}

/**
 * The IPanelBodyProps interface is equipping you with a versatile set of properties to create dynamic and user-centric panel body components.
 * Whether you're displaying content, messages, or data, the properties offered by IPanelBodyProps will help you design body components that enhance the overall user experience of your application.
 *
 * @interface IPanelBodyProps
 * @type {IPanelBodyProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IPanelBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Assign an accent color variant to the panel body, typically used to classify the information level or importance.
   * The accent color helps users quickly identify the significance of the content presented within the body.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  accent?: TTone;
  /**
   * Control whether the panel body is visible or hidden. When set to true, the panel body is displayed, providing users with access to its content.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isVisible?: boolean;
}

/**
 * The IPanelGroupProps interface is providing you with a versatile toolkit to create well-structured and aesthetically appealing panel group components.
 * Whether you're arranging related panels, showcasing multiple sections, or enhancing visual clarity, the properties offered by IPanelGroupProps will help you craft panel groups that effectively organize content in your application.
 *
 * @interface IPanelGroupProps
 * @type {IPanelGroupProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface IPanelGroupProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Enhance the visual organization of panels within the panel group by adding a separator between each panel.
   * This separator serves as a subtle visual cue that distinguishes individual panels.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  hasSeparator?: boolean;
}
