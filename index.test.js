import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "@material-ui/core/Button";

function createNodeMock() {
  return {
    nodeType: 1, // to trick findDOMNode
    // for focus-visible polyfill
    ownerDocument: {
      addEventListener: () => {},
      removeEventListener: () => {}
    }
  };
}

it("can mount a button", () => {
  const renderer = TestRenderer.create(<Button>test</Button>, {
    createNodeMock
  });
  expect(renderer.toJSON()).toMatchSnapshot();
});
