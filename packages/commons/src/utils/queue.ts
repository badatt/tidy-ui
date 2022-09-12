import clone from './clone';

/**
 * Queue Item
 */
export type TQueueItemType = {
  /**
   * Id of the item
   */
  id?: string;
};

/**
 * Queue implementation
 *
 * @template T
 */
class Queue<T extends TQueueItemType> {
  items: Record<number, T>;
  head: number;
  tail: number;

  /**
   * Constructor
   *
   * @param {T[]} items default items to the queue
   */
  constructor(items?: T[]) {
    this.items = Object.assign({}, items);
    this.head = 0;
    this.tail = Object.keys(this.items).length;
  }

  /**
   * Clears the queue
   */
  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  /**
   * Gets a clone of this instance
   *
   * @returns {Queue<T>} cloned queue
   */
  copy(): Queue<T> {
    return clone.deep(this);
  }

  /**
   * Check if the item exists in the queue
   *
   * @param {T} item check if item aleady exists in the queue
   * @returns {boolean} true if item exists
   */
  has(item: T): boolean {
    return Object.values(this.items).some((i) => i.id === item.id);
  }

  /**
   * Adds item to queue
   *
   * @param {T} item item
   */
  enqueue(item: T) {
    this.items[this.tail] = item;
    this.tail++;
  }
  /**
   * returns item from the queue
   *
   * @returns {T} item
   */
  dequeue(): T {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  /**
   * Peaks into the head of the queue
   *
   * @returns {T} item
   */
  peek(): T {
    return this.items[this.head];
  }
  /**
   * Length of the queue
   *
   * @returns {number} length of the queue
   */
  get length(): number {
    return Object.keys(this.items).length;
  }
  /**
   * Check if the queue is empty
   *
   * @returns {boolean} is empty
   */
  get isEmpty(): boolean {
    return this.length === 0;
  }
}

export default Queue;
