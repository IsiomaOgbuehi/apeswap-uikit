import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Switch from "../../components/Switch/Switch";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Switch checked={false} labels={["1", "2"]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-l4yzaa-Switch css-vurnku"
      >
        <div
          class="css-1aawmn0-Switch css-vurnku"
        >
          <span
            class="css-1w070cj"
          >
            1
          </span>
        </div>
        <div
          class="css-1aawmn0-Switch css-vurnku"
        >
          <span
            class="css-1w070cj"
          >
            2
          </span>
        </div>
        <button
          class="css-18fdx7q"
        >
          1
        </button>
        <input
          aria-hidden="true"
          class="css-1k7e3dq-Switch"
          tabindex="-1"
          type="checkbox"
        />
      </div>
    </DocumentFragment>
  `);
});
