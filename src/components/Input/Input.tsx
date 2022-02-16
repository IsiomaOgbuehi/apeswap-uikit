import React from "react";
import { Input as ThemeUIInput, Box } from "theme-ui";
import { InputProps, sizes, iconSizes } from "./types";
import { Icon } from "../Icon";

const Input: React.FC<InputProps> = ({ size = sizes.MD, icon, width, sx, ...props }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <ThemeUIInput
        {...props}
        sx={{
          width,
          pl: "15px",
          pr: icon ? "40px" : "15px",
          variant: `forms.input.${size}`,
          ...sx,
        }}
      />
      {icon && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "15px",
          }}
        >
          <Icon icon={icon} width={iconSizes[size]} />
        </Box>
      )}
    </Box>
  );
};

export default Input;
