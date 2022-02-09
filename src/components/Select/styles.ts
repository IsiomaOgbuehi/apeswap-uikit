import { ThemeUIStyleObject } from "theme-ui";
import { fontSizes } from "./types";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    background: "lvl1",
    borderRadius: "10px",
    cursor: "pointer",
    width: "fit-content",
    position: "relative",
  },
  ul: {
    position: "absolute",
    background: "white2",
    borderRadius: "10px",
    cursor: "pointer",
    minWidth: "100%",
    width: "max-content",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  backdrop: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    background: "transparent",
    top: 0,
    left: 0,
  },
};

interface Props {
  active: boolean;
  size: keyof typeof fontSizes;
}

export const dynamicStyles: Record<string, (props: any) => ThemeUIStyleObject> = {
  dropdownItem: ({ size }: Props) => ({
    display: "inline-block",
    fontSize: fontSizes[size],
    "*": {
      fontSize: fontSizes[size],
    },
  }),
};

export default styles;
