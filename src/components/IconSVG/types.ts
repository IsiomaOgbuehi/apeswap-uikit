import { colorProps } from "../../theme/Apeswap/types";

export enum icons {
  CARET = "caret",
  EXTERNAL = "external",
  TWITTER = "twitter",
  SEND = "send",
}

export enum directions {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}

type iconTypes = `${icons}`;
type directionTypes = `${directions}`;

export interface IconSVGProps {
  icon?: iconTypes;
  direction?: directionTypes;
  color?: colorProps;
  width?: string | number;
}
