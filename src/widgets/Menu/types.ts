import { iconTypes } from "../../components/IconSVG/types";

export interface MenuProps {
  collapse: boolean;
}

export interface MenuItem {
  label: string;
  path?: string;
  icon?: iconTypes;
  subMenu?: MenuItem[];
}

export interface LinkProps {
  item: MenuItem;
}

export interface MenuContextProps {
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
}
