import { DefaultTheme } from "styled-components";
import { dark as darkToggle } from "../components/Toggle/theme";
import { dark as darkNav } from "../widgets/Menu/theme";
import { dark as darkModal } from "../widgets/Modal/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: {},
  colors: darkColors,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  radio: {},
};

export default darkTheme;
