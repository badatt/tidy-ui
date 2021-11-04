import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Card } from "../src";

describe("Card", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Card>This is a simple card</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
