import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { ButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({ variant = variants.PRIMARY, sx, size = sizes.MEDIUM, children, ...props }) => {
  return (
    <ThemeUIButton
      {...props}
      sx={{
        ...sx,
        variant: `buttons.${variant}`,
        fontSize: buttonFontSizes[size],
        px: buttonPadding[size].x,
        py: buttonPadding[size].y,
        transition: "filter .3s filter",
        "&:hover": {
          filter: "brightness(85%)",
        },
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
