/* eslint-disable react/require-default-props */
import React from "react";
import { Box, Link } from "theme-ui";
import { Icon } from "../Icon";
import { LinkExternalProps } from "./types";

const LinkExternal: React.FC<LinkExternalProps> = ({ display, textAlign, children, ...props }) => {
  return (
    <Link
      sx={{
        color: "brown",
        display,
        textAlign,
      }}
      {...props}
      target="_blank"
    >
      {children}
      <Box as="span" sx={{ marginLeft: 2, verticalAlign: "middle" }}>
        <Icon icon="external" color="brown" />
      </Box>
    </Link>
  );
};

export default LinkExternal;
