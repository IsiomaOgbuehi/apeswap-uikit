/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import { MenuContextProps } from "./types";

const MenuContext = createContext<MenuContextProps>({
  collapse: true,
  active: "/",
  setCollapse: () => {},
  setActive: () => {},
});

export const MenuContextProvider: React.FC = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [active, setActive] = useState("/");

  return (
    <MenuContext.Provider
      value={{
        collapse,
        active,
        setCollapse,
        setActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
