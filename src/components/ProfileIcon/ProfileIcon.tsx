import React from "react";
import { Box } from "theme-ui";
import { IconSVG } from "../IconSVG";
import { icons } from "../IconSVG/types";
import style from "./styles";

export interface Props {
  colorMode?: "light" | "dark";
}

const ProfileIcon: React.FC<Props> = ({ colorMode = "light" }) => {
  return (
    <Box sx={style.container}>
      <IconSVG icon={colorMode === "light" ? icons.PROFILELIGHT : icons.PROFILEDARK} />
    </Box>
  );
};

export default ProfileIcon;
