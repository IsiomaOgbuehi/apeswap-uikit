/** @jsxImportSource theme-ui */
import React from "react";
import { IconSVGProps, icons } from "./types";
import { dynamicStyles } from "./styles";
import {
  Caret,
  External,
  Twitter,
  Send,
  Error,
  Close,
  Collapse,
  TextLogo,
  ProfileLight,
  ProfileDark,
  ProfileIcon,
  Polygon,
  BSC,
  Logo,
  Hamburger,
} from "./icons";
import { IconStyles } from "./icons/types";

const IconSVG: React.FC<IconSVGProps> = ({ icon, ...props }) => {
  const getStyles = ({ degree, color }: IconStyles) =>
    dynamicStyles.generic({
      degree,
      color,
    });

  if (icon === icons.CARET) {
    return <Caret {...props} getStyles={getStyles} />;
  }
  if (icon === icons.EXTERNAL) {
    return <External {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TWITTER) {
    return <Twitter {...props} getStyles={getStyles} />;
  }
  if (icon === icons.SEND) {
    return <Send {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ERROR) {
    return <Error {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CLOSE) {
    return <Close {...props} getStyles={getStyles} />;
  }
  if (icon === icons.COLLAPSE) {
    return <Collapse {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TEXTLOGO) {
    return <TextLogo {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILELIGHT) {
    return <ProfileLight {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILEDARK) {
    return <ProfileDark {...props} getStyles={getStyles} />;
  }
  if (icon === icons.PROFILEICON) {
    return <ProfileIcon {...props} getStyles={getStyles} />;
  }
  if (icon === icons.POLYGON) {
    return <Polygon {...props} getStyles={getStyles} />;
  }
  if (icon === icons.BSC) {
    return <BSC {...props} getStyles={getStyles} />;
  }
  if (icon === icons.LOGO) {
    return <Logo {...props} getStyles={getStyles} />;
  }
  if (icon === icons.HAMBURGER) {
    return <Hamburger {...props} getStyles={getStyles} />;
  }
  return null;
};

export default IconSVG;
