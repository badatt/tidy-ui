import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Paper } from "../src";

describe("Paper", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Paper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
