import React from "react";
import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

function createNodeMock() {
  return {
    nodeType: 1, // to trick findDOMNode
    // for focus-visible polyfill
    ownerDocument: {
      addEventListener: () => {},
      removeEventListener: () => {}
    },
    focus: () => {}
  };
}

it("can mount a button", () => {
  const renderer = TestRenderer.create(<Button>test</Button>, {
    createNodeMock
  });
  expect(renderer.toJSON()).toMatchSnapshot();
});

it("can mount a MenuList", () => {
  const renderer = TestRenderer.create(
    <MenuList autoFocus>
      <MenuItem selected>1st item</MenuItem>
    </MenuList>,
    {
      createNodeMock
    }
  );

  expect(renderer.toJSON()).toMatchSnapshot();
});

it("throws with a modal", () => {
  expect(() =>
    TestRenderer.create(
      <Modal open>
        <div />
      </Modal>
    )
  ).toThrow();
});

it("can shallow render a button", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Button />);
  const result = renderer.getRenderOutput();
});
