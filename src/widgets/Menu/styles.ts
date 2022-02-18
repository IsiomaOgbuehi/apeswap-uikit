import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  menu: {
    background: "white3",
    overflow: "hidden",
    left: 0,
    height: "100vh",
    position: "fixed",
    paddingTop: "80px",
    top: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "width .2s linear",
  },
  menuBody: {
    flexDirection: "column",
    overflowX: "hidden",
    height: "100%",
    width: "100%",
    marginBottom: "20px",
  },
  menuLinkContainer: {
    alignItems: "center",
    height: "48px",
    pl: "17px",
    pr: "20px",
    flexShrink: 0,
    boxShadow: "none",
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "white4",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    fontWeight: "600",
  },
  text: {
    color: "brown",
    paddingLeft: "10px",
    fontWeight: "400",
  },
  footer: {
    paddingTop: [5, 5, 0],
    height: "auto",
    width: "100%",
    boxShadow: ["rgb(0 0 0 / 16%) 0px 1px 4px", "rgb(0 0 0 / 16%) 0px 1px 4px", "none"],
  },
};

export default styles;
