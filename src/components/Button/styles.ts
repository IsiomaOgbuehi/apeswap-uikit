import { ThemeUIStyleObject } from "theme-ui";

const defaultStyle = {
  padding: "10px",
  border: "none",
  transition: "all .3s linear",
  "&:hover": {
    filter: "brightness(85%)",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
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
    transition: "all .3s linear",
    "&:hover": {
      filter: "brightness(85%)",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
};

export default styles;
