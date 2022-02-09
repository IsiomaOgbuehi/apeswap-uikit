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
          class="css-3yd2i2-Progress"
          style="width: 0%;"
        />
        <div
          class="css-1ym7usm-Progress"
          style="width: 0%;"
        />
      </div>
    </DocumentFragment>
  `);
});
