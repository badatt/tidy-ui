import React from 'react';
import { createPortal } from 'react-dom';
import { isValidDom } from '../utils';

/**
 * Portal props
 */
export interface IPortalProps {
  /**
   * Container to launch portal on
   */
  container?: HTMLElement | (() => HTMLElement | null) | null;
  /**
   * Id of the parent element
   */
  id?: string;
}

/**
 * usePortal return
 */
export interface IUsePortalFnReturn {
  /**
   * Portal component
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Portal: React.FC<{
    /**
     * Node children
     */
    children?: React.ReactNode;
  }>;
  /**
   * Root target element
   */
  target: HTMLElement | null;
}

/**
 * Hook to create Portal
 *
 * @param {IPortalProps?} props hook props
 * @returns {IUsePortalFnReturn} portal and its parent element target
 */
const usePortal = (props?: IPortalProps): IUsePortalFnReturn => {
  const rootRef = React.useRef<HTMLElement | null>(isValidDom() ? document.body : null);

  React.useEffect(() => {
    const containerEle = typeof props?.container === 'function' ? props.container() : props?.container;
    const existingParent = (props?.id && document.getElementById(props.id)) as HTMLElement | null;
    const parent = containerEle ?? existingParent ?? document.body;
    rootRef.current = parent;
  }, [rootRef, props?.container, props?.id]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Portal: React.FC<{
    /**
     * Node children
     */
    children?: React.ReactNode;
  }> = React.useCallback(
    ({
      children,
    }: {
      /**
       * Node children
       */
      children?: React.ReactNode;
    }) => {
      if (rootRef.current != null) return createPortal(children, rootRef.current);
      return null;
    },
    [rootRef],
  );

  return { Portal, target: rootRef.current };
};

export default usePortal;
