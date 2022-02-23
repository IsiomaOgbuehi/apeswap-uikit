import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu } from "../../widgets/Menu";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu>body</Menu>
    </BrowserRouter>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="css-1al6ass"
      >
        body
      </div>
    </DocumentFragment>
  `);
});
