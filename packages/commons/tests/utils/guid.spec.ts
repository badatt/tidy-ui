import { guid } from '../../src';

describe('test guid', () => {
  it('generate guid', () => {
    expect(guid()).not.toBeNull();
  });
});
