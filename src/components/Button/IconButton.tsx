import React from "react";
import { Button } from "theme-ui";
import { Icon } from "../Icon";
import { icons } from "../Icon/types";
import { IconButtonProps, iconButtonVariants as variants } from "./types";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";

const IconButton: React.FC<IconButtonProps> = ({
  icon = icons.SEND,
  color = colorValues.white1,
  variant = variants.PRIMARY,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={
        variant === variants.TRANSPARENT ? style.transparent : { variant: `buttons.${variant}`, ...style[`${variant}`] }
      }
    >
      <Icon color={color} icon={icon} {...props} />
    </Button>
  );
};

export default IconButton;
