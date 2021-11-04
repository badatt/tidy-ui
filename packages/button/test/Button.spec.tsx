import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Button } from "../src";

describe("Button", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
