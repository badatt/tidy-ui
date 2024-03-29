import { ComponentPropsWithRef, ElementType, PropsWithChildren, ReactElement } from 'react';
import { IBaseProps } from './common';

/**
 * Pick
 */
export type Pick<T, K extends keyof T> = { [P in K]: T[P] };
/**
 * Exclude
 */
export type Exclude<T, U> = T extends U ? never : T;
/**
 * Omit
 */
export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

/**
 * Replaces props
 */
export type ReplaceProps<Inner extends ElementType, P> = Omit<ComponentPropsWithRef<Inner>, P> & P;

/**
 * Ref forwarding component
 */
export interface IRefForwardingComponent<T extends ElementType, P = unknown> {
  <As extends React.ElementType = T>(
    props: PropsWithChildren<ReplaceProps<As, IBaseProps<As> & P>>,
  ): ReactElement | null;

  /**
   * Default props
   */
  defaultProps: Record<string, unknown>;

  /**
   * Display name
   */
  displayName: string;
}
