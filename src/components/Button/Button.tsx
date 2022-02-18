import React from "react";
import { Button as ThemeUIButton } from "theme-ui";
import { ButtonProps, variants, buttonFontSizes, buttonPadding, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({
  variant = variants.PRIMARY,
  sx,
  csx,
  size = sizes.MEDIUM,
  children,
  ...props
}) => {
  return (
    <ThemeUIButton
      {...props}
      sx={{
        variant: `buttons.${variant}`,
        fontSize: buttonFontSizes[size],
        px: buttonPadding[size].x,
        py: buttonPadding[size].y,
        transition: "all .3s linear",
        "&:hover": {
          filter: "brightness(85%)",
        },
        "&:active": {
          transform: "scale(0.9)",
        },
        ...sx,
        ...csx,
      }}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
