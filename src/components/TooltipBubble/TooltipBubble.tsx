import React from "react";
import { Box } from "theme-ui";
import { TooltipProps, variants } from "./TooltipBubble.interface";
import style from "./styles";

const TooltipBubble: React.FC<TooltipProps> = ({
  variant = variants.DEFAULT,
  maxWidth = "250px",
  position = "fixed",
  top,
  left,
  right,
  bottom,
  children,
}) => {
  return (
    <Box
      sx={{
        maxWidth,
        position,
        top,
        left,
        right,
        bottom,
        ...style[variant],
        ...style.bottomRight,
      }}
    >
      {children}
    </Box>
  );
};

export default TooltipBubble;
