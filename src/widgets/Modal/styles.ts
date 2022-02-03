import { ThemeUIStyleObject } from "theme-ui";

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    padding: 9,
    background: "navbar",
    borderRadius: "normal",
    color: "brown",
    hr: {
      background: "#DCD9D9",
    },
    zIndex: "modal",
    position: "fixed",
    display: "block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 1s ease",
  },
  anim: { transition: "all 1s ease" },
  backdrop: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgb(69, 42, 122, 0.6)",
    width: "100%",
    height: "100%",
    zIndex: "9",
    transition: "all 1s ease",
  },
  modalHead: {
    justifyContent: "space-between",
    alignItems: "center",
    svg: {
      fill: "brown",
      marginLeft: "auto",
      cursor: "pointer",
    },
    button: {
      ml: "auto",
    },
  },
  modalFooter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    pt: 9,
    gap: 4,
  },
  cancelButton: {
    background: "transparent",
    textDecoration: "underline",
    color: "brown",
    cursor: "pointer",
    fontSize: 0,
    fontWeight: "normal",
    p: 0,
  },
};

export default styles;
