/** @jsxImportSource theme-ui */
import React from "react";
import style from "./styles";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { topMenuProps } from "./TopMenu.interface";

const TopMenu: React.FC<topMenuProps> = ({ ...props }) => {
  return (
    <nav sx={style.nav}>
      <LeftContainer {...props} />
      <RightContainer {...props} />
    </nav>
  );
};

export default TopMenu;
