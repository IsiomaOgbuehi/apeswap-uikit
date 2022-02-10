import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  nav: {
    background: "navbar",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "13px 20px",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: [4, 8],
    "button:first-of-type": {
      px: [null, null, "6px"],
      py: [null, null, "10px"],
      borderRadius: "normal",
      "&:hover": {
        background: "lvl1",
      },
    },
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: [4, 8],
    "button:nth-of-type(1)": {
      display: ["none", "none", "inline-flex"],
    },
  },
};

export default styles;
