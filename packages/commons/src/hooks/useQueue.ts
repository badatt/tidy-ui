import React from 'react';
import { Queue } from '../utils';
import { TQueueItemType } from '../utils/queue';

/**
 * useQueue hook props
 */
export interface IUseQueueProps<T extends TQueueItemType> {
  /**
   * Initial items
   */
  queue?: Queue<T>;
}

/**
 * useQueue return props
 *
 * @template T
 */
export interface IUseQueueFnReturnProps<T extends TQueueItemType> {
  /**
   * Adds item to queue
   *
   * @param {T} item queue item
   */
  addToQueue(item: T): void;

  /**
   * Get the item from queue
   */
  getFromQueue(): T;

  /**
   * Check if the queue is empty
   */
  isEmpty: boolean;

  /**
   * Length of the queue
   */
  queueLength: number;
}

/**
 * hook that creates a queue and polls it for items
 *
 * @template T
 * @param {IUseQueueProps<T>} props useQueue props
 * @returns {IUseQueueFnReturnProps<T>} useQueue returns
 */
const useQueue = <T extends TQueueItemType>(props?: IUseQueueProps<T>): IUseQueueFnReturnProps<T> => {
  const [queue, setQueue] = React.useState(props?.queue || new Queue<T>());

  /**
   * Add to queue
   *
   * @param {T} item adds item to the current queue
   * @returns {void}
   */
  const addToQueue = (item: T): void => {
    queue?.enqueue(item);
    setQueue(queue.copy());
  };

  /**
   * Get from queue
   *
   * @returns {T | undefined} item from queue
   */
  const getFromQueue = (): T => {
    const item = queue.dequeue();
    setQueue(queue.copy());
    return item;
  };

  /**
   * Length of the queue
   *
   * @returns {number} length of the queue
   */
  const length = (): number => queue.length;

  return { addToQueue, getFromQueue, isEmpty: queue.isEmpty, queueLength: length() };
};

export default useQueue;
