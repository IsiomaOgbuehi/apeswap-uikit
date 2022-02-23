import { iconTypes } from "../../components/Icon/types";

export interface MenuItem {
  label: string;
  path?: string;
  icon?: iconTypes;
  subMenu?: MenuItem[];
}

export interface MenuLinkProps {
  item: MenuItem;
}

export interface MenuContextProps {
  collapse: boolean;
  active: string;
  setCollapse: (collapse: boolean) => void;
  setActive: (active: string) => void;
}
