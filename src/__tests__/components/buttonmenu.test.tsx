import React from "react";
import { renderWithTheme } from "../../testHelpers";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <ButtonMenu activeIndex={0} onClick={handleClick}>
      <ButtonMenuItem>Item 1</ButtonMenuItem>
      <ButtonMenuItem>Item 2</ButtonMenuItem>
    </ButtonMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBQB ekFJNm"
      >
        <div
          class="css-1ukkhjs"
        >
          Item 1
        </div>
        <div
          class="sc-gsTEea iwPuPn css-1dr1na7"
        >
          Item 2
        </div>
      </div>
    </DocumentFragment>
  `);
});
