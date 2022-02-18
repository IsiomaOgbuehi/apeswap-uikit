/** @jsxImportSource theme-ui */
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, NavLink, Text } from "theme-ui";
import { Icon } from "../../components/Icon";
import MenuContext from "./MenuContext";
import styles from "./styles";
import { MenuLinkProps } from "./types";

const DropdownLink: React.FC<MenuLinkProps> = ({ item }) => {
  const { label, icon, path } = item;

  return (
    <NavLink href={path} sx={styles.link}>
      <Flex sx={{ alignItems: "center" }}>
        <Flex sx={{ flexShrink: 0 }}>
          <Icon width={24} icon={icon} />
        </Flex>
        <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
          <Text sx={styles.textStyles}>{label}</Text>
        </Flex>
      </Flex>
    </NavLink>
  );
};

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const { label, icon, path, subMenu } = item;
  const { collapse, setCollapse } = useContext(MenuContext);
  const { pathname } = useLocation();

  const isActive = item.path === pathname;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setCollapse(false);
    return setOpen((prev) => !prev);
  };

  return (
    <Box>
      <Flex
        sx={{
          ...styles.menuLinkContainer,
          boxShadow: isActive ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
        }}
      >
        <NavLink href={path} sx={styles.link} onClick={handleClick}>
          <Flex sx={{ alignItems: "center" }}>
            <Flex sx={{ flexShrink: 0 }}>
              <Icon width={24} icon={icon} />
            </Flex>
            <Flex sx={{ flexShrink: 0, marginLeft: "10px" }}>
              <Text sx={styles.text}>{label}</Text>
            </Flex>
          </Flex>

          {subMenu && (
            <Box sx={{ display: collapse ? "none" : null }}>
              <Icon icon="caret" direction={open ? "up" : "down"} />
            </Box>
          )}
        </NavLink>
      </Flex>

      <AnimatePresence>
        {subMenu && open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            transition={{ height: { duration: 0.3 } }}
            exit={{ height: 0 }}
            sx={{ overflow: "hidden" }}
          >
            {subMenu.map((child, i) => {
              return (
                <Flex
                  sx={{
                    ...styles.menuLinkContainer,
                    boxShadow: child.path === pathname ? "rgb(175, 110, 90) 4px 0px 0px inset" : "",
                  }}
                  key={`${item}-${i + 1}`}
                >
                  <DropdownLink item={child} />
                </Flex>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MenuLink;
