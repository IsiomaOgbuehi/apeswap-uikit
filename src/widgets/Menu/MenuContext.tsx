import React, { createContext, useState } from "react";
import { MenuContextProps } from "./types";

const MenuContext = createContext<MenuContextProps>({
  collapse: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCollapse: () => {},
});

export const MenuContextProvider: React.FC = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        collapse,
        setCollapse,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
