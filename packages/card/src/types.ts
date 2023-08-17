import { HTMLAttributes } from 'react';
import { IBaseProps, TDirection, TTone } from '@tidy-ui/types';

/**
 * The ICardProps interface provides a set of properties that can be used to customize and enhance the appearance and behavior of a card component. Cards are versatile elements that can hold various types of content, such as text, images, and links, and are commonly used to present information in a visually appealing and organized manner.
 *
 * @interface ICardProps
 * @type {ICardProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICardProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Determines the accent color variant of the card, which is typically used to categorize or classify information based on its importance or level. This property allows you to add a touch of visual emphasis to the card's content.
   *
   * @type {TTone}
   * @public
   * @since 0.47.0
   */
  accent?: TTone;

  /**
   * Specifies the position of the accent color within the card. This property lets you control the placement of the accent color, enhancing the card's visual hierarchy.
   *
   * @type {TDirection}
   * @default top
   * @public
   * @since 0.47.0
   */
  accentPosition?: TDirection;

  /**
   * Enables the card to function as a hyperlink. By providing a URL string, you can turn the entire card into a clickable link, allowing users to navigate to a specified destination when the card is clicked.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  href?: string;

  /**
   * Determines whether the card should have sharp edges. When set to `true`, the card's corners will be sharp, creating a distinct visual style.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isSharp?: boolean;
}

/**
 * The ICardFooterProps interface offers a set of properties that allow you to enhance and customize the footer section of a card component. Card footers are valuable components used to provide additional information, actions, or context related to the content within the card. With these properties, you can easily tailor the appearance and behavior of the card footer to align with your application's design and user experience goals.
 *
 * @interface ICardFooterProps
 * @type {ICardFooterProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICardFooterProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * This property controls whether the footer of the card is separated from the main body by a divider. When set to true, a subtle line is added to visually distinguish the footer from the rest of the card content. This option is particularly useful when you want to create a clear visual distinction between the footer and the main content of the card.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isDivided?: boolean;
}

/**
 * The ICardHeaderProps interface provides a set of properties that allow you to enhance and customize the header section of a card component. Card headers are essential elements that can contain titles, captions, or other information to provide context and introduce the content within the card. With these properties, you can easily tailor the appearance and behavior of the card header to align with your application's design and user experience goals.
 *
 * @interface ICardHeaderProps
 * @type {ICardHeaderProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICardHeaderProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {
  /**
   * This property enables you to create a hyperlink within the card header. When a valid URL is provided, a launch icon is added to the top right corner of the header. Clicking on the launch icon opens the associated hyperlink in a new browser tab, providing users with a convenient way to access external content related to the card's context.
   *
   * @type {string}
   * @public
   * @since 0.47.0
   */
  href?: string;

  /**
   * This property controls whether the header of the card is separated from the main body by a divider. When set to true, a subtle line is added to visually distinguish the header from the rest of the card content. This option can be useful when you want to create a clear visual separation between the header and the main content of the card.
   *
   * @type {boolean}
   * @default false
   * @public
   * @since 0.47.0
   */
  isDivided?: boolean;
}

/**
 * The ICardBodyProps interface provides a set of properties that allow you to customize and optimize the main content section of a card component. The card body is where you can present the core information, media, or textual content that users engage with. With these properties, you have the flexibility to tailor the appearance and behavior of the card body to match your application's design and user experience objectives.
 *
 * @interface ICardBodyProps
 * @type {ICardBodyProps}
 * @augments {HTMLAttributes<HTMLDivElement>}
 * @public
 * @since 0.47.0
 */
export interface ICardBodyProps extends IBaseProps, HTMLAttributes<HTMLDivElement> {}
