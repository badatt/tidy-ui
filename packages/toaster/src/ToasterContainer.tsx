import React from 'react';
import { styled } from '@tidy-ui/commons';
import ToasterContext from './provider/ToasterContext';
import { ToasterActions } from './actions';
import { queue, toastSize } from './reducers';
import { IToasterProps } from './types';
import useToaster from './useToaster';

const ToasterRoot = styled.div`
  position: absolute;
  display: block;
  bottom: 8px;
`;

const ToastItem = styled.div`
  margin: 0.5rem 1rem;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
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
  const { toaster } = useToaster();

  /**
   * Auto remove toast callback
   *
   * @param {string} id to remove toast after timeout
   */
  const autoRemoveToast = (id?: string) => {
    if (typeof timeout === 'number') {
      setTimeout(() => {
        toaster.remove(id);
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

  return (
    <ToasterRoot role="toaster">
      {state.toasts.map((v, i) => {
        autoRemoveToast(v.id);
        return <ToastItem key={i}>{v.item}</ToastItem>;
      })}
    </ToasterRoot>
  );
};

ToasterContainer.defaultProps = {
  timeout: 5000,
};

export { ToasterContainer };
