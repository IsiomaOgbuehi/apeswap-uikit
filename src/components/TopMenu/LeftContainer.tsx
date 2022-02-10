import React from "react";
import { Box } from "theme-ui";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { IconButton } from "../Button";
import style from "./styles";
import { icons } from "../IconSVG/types";
import { topMenuProps } from "./TopMenu.interface";

const LeftContainer: React.FC<topMenuProps> = ({ hideLogo = false, collapse, handleCollapse }) => {
  return (
    <Box sx={style.leftContainer}>
      <IconButton
        variant="transparent"
        onClick={handleCollapse}
        icon={!collapse ? icons.COLLAPSE : icons.HAMBURGER}
        color="brown"
      />
      {!hideLogo && (
        <Router>
          <Link to="/">
            <IconButton
              as="div"
              variant="transparent"
              icon={icons.TEXTLOGO}
              sx={{ display: ["none", "none", "block"] }}
            />
            <IconButton as="div" variant="transparent" icon={icons.LOGO} sx={{ display: ["block", "block", "none"] }} />
          </Link>
        </Router>
      )}
    </Box>
  );
};

export default LeftContainer;
