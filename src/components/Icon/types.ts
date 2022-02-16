import { colorProps } from "../../theme/Apeswap/types";

export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  HOME = "home",
  CALCULATOR = "calculator",
  FARM = "farm",
  FRAME = "frame",
  GNANA = "gnana",
  INFO = "info",
  MORE = "more",
  NFA = "nfa",
  POOL = "pool",
  ROCKET = "rocket",
  TRADE = "trade",
  VAULT = "vault",
  ELLIPSE = "ellipse",
  TWITTER = "twitter",
  SEND = "send",
  ERROR = "error",
  CLOSE = "close",
  COLLAPSE = "collapse",
  TEXTLOGO = "textLogo",
  PROFILELIGHT = "profileLight",
  PROFILEDARK = "profileDark",
  PROFILEICON = "profileIcon",
  POLYGON = "polygon",
  BSC = "bsc",
  LOGO = "logo",
  HAMBURGER = "hamburger",
  SEARCH = "search",
}

export enum directions {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

export type iconTypes = `${icons}`;
type directionTypes = `${directions}`;

export interface IconProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: colorProps;
  width?: string | number;
}
