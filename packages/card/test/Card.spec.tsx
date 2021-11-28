import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Card } from "../src";

describe("Card", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
