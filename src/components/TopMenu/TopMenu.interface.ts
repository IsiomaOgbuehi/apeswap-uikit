import { BoxProps } from "theme-ui";
import { icons } from "../IconSVG/types";

export interface netWorkProps {
  name: string;
  icon?: icons;
  chainId: number;
}

export interface topMenuProps extends BoxProps {
  colorMode?: string;
  networks?: netWorkProps[];
  activeNetwork?: number;
  setActiveNetwork?: () => void;
  hideLogo?: boolean;
  profileLink?: string;
  handleConnect?: () => void;
  collapse?: boolean;
  handleCollapse?: () => void;
}
