import React from "react";
import { renderWithTheme } from "../../testHelpers";
import TopMenu from "../../components/TopMenu/TopMenu";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<TopMenu />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <nav
        class="css-1ea67m4-TopMenu"
      />
    </DocumentFragment>
  `);
});
