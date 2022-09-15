import { Queue } from '../../src';

interface Item {
  id: string;
  value: string;
}

describe('Queue', () => {
  let q: Queue<Item>;
  beforeEach(() => {
    q = new Queue();
  });

  it('Enqueue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    expect(q.length).toEqual(1);
  });

  it('Dequeue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    q.enqueue({ id: '2', value: 'val2' });
    q.enqueue({ id: '3', value: 'val3' });
    expect(q.length).toEqual(3);
    const item = q.dequeue();
    expect(q.length).toEqual(2);
    expect(item.value).toEqual('val1');
    expect(item.id).toEqual('1');
  });

  it('Peek into queue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    q.enqueue({ id: '2', value: 'val2' });
    q.enqueue({ id: '3', value: 'val3' });
    expect(q.length).toEqual(3);
    const item = q.peek();
    expect(q.length).toEqual(3);
    expect(item.value).toEqual('val1');
    expect(item.id).toEqual('1');
  });

  it('Check if item exists already in queue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    q.enqueue({ id: '2', value: 'val2' });
    q.enqueue({ id: '3', value: 'val3' });
    expect(q.length).toEqual(3);
    const check = q.has({ id: '1', value: 'val1' });
    expect(q.length).toEqual(3);
    expect(check).toEqual(true);
  });

  it('Check if item exists already in queue with invalid param', () => {
    q.enqueue({ id: '1', value: 'val1' });
    q.enqueue({ id: '2', value: 'val2' });
    q.enqueue({ id: '3', value: 'val3' });
    expect(q.length).toEqual(3);
    const check = q.has({ id: '10', value: 'val1' });
    expect(q.length).toEqual(3);
    expect(check).toEqual(false);
  });

  it('Check if queue is empty', () => {
    expect(q.isEmpty).toEqual(true);
  });

  it('Check if queue is empty after dequeue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    expect(q.isEmpty).toEqual(false);
    q.dequeue();
    expect(q.isEmpty).toEqual(true);
  });

  it('Clears the queue', () => {
    q.enqueue({ id: '1', value: 'val1' });
    q.enqueue({ id: '2', value: 'val2' });
    q.enqueue({ id: '3', value: 'val3' });
    expect(q.length).toEqual(3);
    q.clear();
    expect(q.length).toEqual(0);
    expect(q.isEmpty).toEqual(true);
  });
});
