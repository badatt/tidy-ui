import React from 'react';
import { createChainedFunction, styled } from '@tidy-ui/commons';
import ToasterContext from './provider/ToasterContext';
import { ToasterActions } from './actions';
import { queue, toastSize } from './reducers';
import { IToast, IToasterProps } from './types';

const ToasterRoot = styled.div`
  position: absolute;
  display: block;
  bottom: 8px;
`;

const ToastItem = styled.div`
  margin: 0.5rem 1rem;
`;

/**
 * Toaster
 *
 * @param {IToasterProps} props toaster props
 * @returns {JSX.Element} react component
 */
const ToasterContainer: React.FC<IToasterProps> = (props: IToasterProps): JSX.Element => {
  const { timeout, limit } = props;
  const { state, dispatch } = React.useContext(ToasterContext);

  /**
   * Auto remove toast callback
   *
   * @param {string} id to remove toast after timeout
   */
  const autoRemoveToast = (id?: string) => {
    if (typeof timeout === 'number') {
      setTimeout(() => {
        dispatch({
          payload: { id },
          type: ToasterActions.RemoveToast,
        });
      }, timeout);
    }
  };

  React.useEffect(() => {
    const poller = setInterval(() => {
      if (queue.length > 0 && toastSize.current < Number(limit || Number.MAX_SAFE_INTEGER)) {
        const queueItem = queue.dequeue();
        dispatch({
          payload: { item: queueItem.item },
          type: ToasterActions.AddToast,
        });
      }
    }, 0);
    return () => clearInterval(poller);
  }, []);

  /** @internal */
  const renderItem = (t: IToast) => {
    if (t.item) {
      const { onClose, ...rest } = t.item.props;
      return React.cloneElement(t.item, {
        ...rest,
        onClose: createChainedFunction(onClose, () =>
          dispatch({
            payload: { id: t.id },
            type: ToasterActions.RemoveToast,
          }),
        ),
      });
    }
    return null;
  };

  return (
    <ToasterRoot role="toaster">
      {state.toasts.map((v) => {
        autoRemoveToast(v.id);
        return <ToastItem key={v.id}>{renderItem(v)}</ToastItem>;
      })}
    </ToasterRoot>
  );
};

ToasterContainer.defaultProps = {
  timeout: 5000,
};

export { ToasterContainer };
