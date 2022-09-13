import React from 'react';

/**
 * Event types
 */
export const enum Event {
  Show,
}

/**
 * Callback on Show event
 */
type OnShowCallback = (content: React.ReactNode, options: any) => void;

/**
 * Callback
 */
type Callback = OnShowCallback;

/**
 * timeoutId
 */
type TimeoutId = ReturnType<typeof setTimeout>;

/**
 * EventManager
 */
export interface IEventManager {
  /**
   * Cancel event
   *
   * @param {Event} event
   */
  cancelEmit(event: Event): IEventManager;
  /**
   * Emit
   *
   * @param {Event} event
   * @param {React.ReactNode} content
   */
  emit(event: Event.Show, content: React.ReactNode, options: any): void;
  /**
   * Emit queue
   */
  emitQueue: Map<Event, TimeoutId[]>;
  /**
   * Map of events with their callbacks
   */
  list: Map<Event, Callback[]>;
  /**
   * Off event
   *
   * @param {Event} event
   * @param {OnShowCallback} callback
   */
  off(event: Event, callback?: Callback): IEventManager;
  /**
   * On Show event
   *
   * @param {Event} event Show event
   * @param {OnShowCallback} callback
   */
  on(event: Event.Show, callback: OnShowCallback): IEventManager;
}

/**
 * event manager
 */
const eventManager: IEventManager = {
  /**
   * Cancels the emit
   *
   * @param {Event} event event
   * @returns {IEventManager} event manger itself
   */
  cancelEmit(event: Event): IEventManager {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }

    return this;
  },
  /**
   * Emit events
   *
   * @param {Event} event event
   * @param {any[]} args args
   */
  emit(event: Event, ...args: any[]) {
    this.list.has(event) &&
      this.list.get(event)!.forEach((callback: Callback) => {
        const timer: TimeoutId = setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          callback(...args);
        }, 0);

        this.emitQueue.has(event) || this.emitQueue.set(event, []);
        this.emitQueue.get(event)!.push(timer);
      });
  },
  emitQueue: new Map(),
  list: new Map(),

  /**
   * On events
   *
   * @param {Event} event event to register
   * @param {Callback} callback callback
   * @returns {IEventManager} event manger itself
   */
  off(event: Event, callback: Callback): IEventManager {
    if (callback) {
      const cb = this.list.get(event)!.filter((cb) => cb !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  },

  /**
   * On events
   *
   * @param {Event} event event to register
   * @param {Callback} callback callback
   * @returns {IEventManager} event manger itself
   */
  on(event: Event, callback: Callback): IEventManager {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event)!.push(callback);
    return this;
  },
};

export default eventManager;
