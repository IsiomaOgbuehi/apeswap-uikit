import React from "react";
import { Box } from "theme-ui";
import { Icon } from "../Icon";
import { icons } from "../Icon/types";
import style from "./styles";

export interface Props {
  colorMode?: "light" | "dark";
}

const ProfileIcon: React.FC<Props> = ({ colorMode = "light" }) => {
  return (
    <Box sx={style.container}>
      <Icon icon={colorMode === "light" ? icons.PROFILELIGHT : icons.PROFILEDARK} />
    </Box>
  );
};

export default ProfileIcon;
