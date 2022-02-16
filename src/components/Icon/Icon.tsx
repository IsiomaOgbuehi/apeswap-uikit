/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, icons } from "./types";
import { dynamicStyles } from "./styles";
import {
  Caret,
  External,
  Home,
  Calculator,
  Farm,
  Frame,
  Gnana,
  Info,
  More,
  NFA,
  Pool,
  Rocket,
  Trade,
  Vault,
  Ellipse,
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
  Search,
} from "./icons";
import { IconStyles } from "./icons/types";

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
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
  if (icon === icons.HOME) {
    return <Home {...props} getStyles={getStyles} />;
  }
  if (icon === icons.CALCULATOR) {
    return <Calculator {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FARM) {
    return <Farm {...props} getStyles={getStyles} />;
  }
  if (icon === icons.FRAME) {
    return <Frame {...props} getStyles={getStyles} />;
  }
  if (icon === icons.GNANA) {
    return <Gnana {...props} getStyles={getStyles} />;
  }
  if (icon === icons.INFO) {
    return <Info {...props} getStyles={getStyles} />;
  }
  if (icon === icons.MORE) {
    return <More {...props} getStyles={getStyles} />;
  }
  if (icon === icons.NFA) {
    return <NFA {...props} getStyles={getStyles} />;
  }
  if (icon === icons.POOL) {
    return <Pool {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ROCKET) {
    return <Rocket {...props} getStyles={getStyles} />;
  }
  if (icon === icons.TRADE) {
    return <Trade {...props} getStyles={getStyles} />;
  }
  if (icon === icons.VAULT) {
    return <Vault {...props} getStyles={getStyles} />;
  }
  if (icon === icons.ELLIPSE) {
    return <Ellipse {...props} getStyles={getStyles} />;
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
  if (icon === icons.SEARCH) {
    return <Search {...props} getStyles={getStyles} />;
  }
  return null;
};

export default Icon;
