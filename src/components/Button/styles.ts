import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle = {
  padding: "10px",
  border: "none",
};

const styles: Record<string, ThemeUIStyleObject> = {
  primary: {
    ...defaultStyle,
  },
  transparent: {
    ...defaultStyle,
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    padding: "0px",
    border: "none",
    cursor: "pointer",
    svg: {
      background: "transparent",
    },
  },
  circular: {
    padding: "1px",
  },
  flex: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    borderRadius: "normal",
    cursor: "pointer",
    padding: "10px 20px 10px 19px",
    span: {
      fontWeight: "bold",
    },
  },
};

export default styles;
