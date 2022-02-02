import React from "react";
import { Box, LinkProps, Link } from "theme-ui";
import { IconSVG } from "../IconSVG";

const TooltipLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link
      sx={{
        color: "brown",
      }}
      {...props}
      target="_blank"
    >
      {children}
      <Box as="span" sx={{ marginLeft: 2 }}>
        <IconSVG icon="external" color="brown" />
      </Box>
    </Link>
  );
};

export default TooltipLink;
