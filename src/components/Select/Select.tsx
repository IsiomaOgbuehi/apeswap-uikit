/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { SelectProps, selectPadding, sizes, positions } from "./types";
import { IconSVG } from "../IconSVG";
import styles from "./styles";

const Select: React.FC<SelectProps> = ({ children, active, size = sizes.MEDIUM, position = positions.BOTTOM }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <Box sx={styles.container} onClick={handleClick}>
        <Flex
          sx={{
            pr: selectPadding[size],
            columnGap: "10px",
            alignItems: "center",
          }}
        >
          {React.Children.map(children, (child) => {
            if ((child as any)?.props?.value !== active) {
              return null;
            }
            return React.cloneElement(child as any, {
              ...(child as any)?.props,
              active: true,
            });
          })}
          <IconSVG icon="caret" direction={open ? "up" : "down"} />
        </Flex>
        <ul
          sx={{
            ...styles.ul,
            zIndex: 10,
            top: position === positions.BOTTOM ? 5 : undefined,
            bottom: position === positions.TOP ? 5 : undefined,
            display: open ? "block" : "none",
          }}
        >
          {children}
        </ul>
      </Box>
      {open && <div aria-hidden="true" onClick={() => setOpen(false)} sx={styles.backdrop} />}
    </>
  );
};

export default Select;
