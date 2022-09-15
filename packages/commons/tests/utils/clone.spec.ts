import { clone } from '../../src';

class Demo {
  v: number;
  constructor() {
    this.v = 0;
  }
  update(v: number) {
    this.v = v;
  }
}

describe('Clone', () => {
  it('Clone props of already created object', () => {
    const d = new Demo();
    expect(d.v).toEqual(0);
    d.update(10);
    expect(d.v).toEqual(10);
    const cloned = clone.props(d);
    expect(cloned).toEqual({ v: 10 });
    expect(typeof cloned.update).toEqual('undefined');
  });
  it('Clone props of new object', () => {
    const cloned = clone.props(new Demo());
    expect(cloned).toEqual({ v: 0 });
  });
  it('Cloned object should not receive updates made to original object', () => {
    const d = new Demo();
    const cloned = clone.props(d);
    expect(cloned).toEqual({ v: 0 });
    d.update(10);
    expect(d.v).toEqual(10);
    expect(cloned).toEqual({ v: 0 });
  });
  it('Deep clone', () => {
    const d = new Demo();
    const cloned = clone.deep(d);
    expect(typeof cloned.update).toEqual('function');
  });
});
