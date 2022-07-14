import { uuid4 } from '@tidy-ui/commons';

describe("uuid", () => {
  test("Generate uuid", () => {
    const uuid = uuid4();
    expect(uuid).not.toBeNaN();
  });
});