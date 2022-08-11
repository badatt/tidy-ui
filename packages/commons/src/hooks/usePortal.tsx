import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import isValidDom from '../utils/isValidDom';

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
  Portal: FC<{
    /**
     * Node children
     */
    children?: ReactNode;
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
  const rootRef = useRef<HTMLElement | null>(isValidDom ? document.body : null);

  useEffect(() => {
    const containerEle = typeof props?.container === 'function' ? props.container() : props?.container;
    const existingParent = props?.id && document.getElementById(props.id);
    const parent = containerEle || existingParent || document.body;
    rootRef.current = parent;
  }, [rootRef, props?.container, props?.id]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Portal: FC<{
    /**
     * Node children
     */
    children?: ReactNode;
  }> = useCallback(
    ({
      children,
    }: {
      /**
       * Node children
       */
      children?: ReactNode;
    }) => {
      if (rootRef.current != null) return createPortal(children, rootRef.current);
      return null;
    },
    [rootRef],
  );

  return { Portal, target: rootRef.current };
};

export default usePortal;
