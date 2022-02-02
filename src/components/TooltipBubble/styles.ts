import { ThemeUIStyleObject } from "theme-ui";

const baseStyle = {
  p: 9,
  borderRadius: "normal",
  background: "navbar",
  width: "100%",
  zIndex: "modal",
};

const baseDirectionArrow = {
  content: '""',
  display: "block",
  width: 0,
  border: "12px solid transparent",
};

const bottomRight = {
  bottom: 2,
  ...baseDirectionArrow,
  borderBottom: 0,
  borderTopWidth: "15px",
  borderTopStyle: "solid",
  borderTopColor: "navbar",
  right: "3%",
  transform: "translate(-50%, calc(100% + 5px))",
};

const styles: Record<string, ThemeUIStyleObject> = {
  default: {
    color: "brown",
    fontSize: 0,
    lineHeight: "18px",
    fontWeight: "normal",
    ...baseStyle,
  },
  textOnly: {
    color: "brown",
    fontSize: 2,
    lineHeight: "24px",
    fontWeight: "normal",
    ...baseStyle,
  },
  bottomRight: {
    "&::before": {
      position: "absolute",
      ...bottomRight,
    },
  },
  linkWrapper: {
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    svg: {
      fill: "brown",
      path: "brown",
    },
  },
  flex: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 0,
    lineHeight: "18px",
    color: "brown",
    "span:nth-child(2)": {
      fontWeight: "bold",
    },
  },
};

export default styles;
