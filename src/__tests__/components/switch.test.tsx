import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Switch from "../../components/Switch/Switch";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Switch checked={false} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1uvp566"
      >
        <button
          class="css-ug06i5"
        >
          Switch
        </button>
        <button
          class="css-1ue9lt1"
        >
          Switch
        </button>
      </div>
    </DocumentFragment>
  `);
});
