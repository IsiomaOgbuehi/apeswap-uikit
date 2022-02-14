import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Progress />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-41n0hu-Progress"
      >
        <div
          class="css-1m2my81-Progress"
        />
        <div
          class="css-1te2w3q-Progress"
        />
      </div>
    </DocumentFragment>
  `);
});
