import { uuid4 } from '@tidy-ui/commons';

describe('uuid', () => {
  it('Generate uuid', () => {
    const uuid = uuid4();
    expect(uuid).not.toBeNaN();
  });
});
