import React from "react";
import { Box } from "theme-ui";
import { Link, BrowserRouter as Router } from "react-router-dom";
import style from "./styles";
import colorValues from "../../theme/Apeswap/types";
import { icons } from "../IconSVG/types";
import Select from "../Select/Select";
import SelectItem from "../Select/SelectItem";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { Button, IconButton } from "../Button";
import { IconSVG } from "../IconSVG";
import { topMenuProps } from "./TopMenu.interface";

const LeftContainer: React.FC<topMenuProps> = ({
  handleConnect,
  networks,
  activeNetwork,
  setActiveNetwork,
  profileLink = "/",
  ...props
}) => {
  const colorMode = props?.colorMode;
  // console.log(colorMode)
  return (
    <Box sx={style.rightContainer}>
      {networks === undefined || networks?.length === 0 ? (
        <></>
      ) : (
        <Select active={activeNetwork}>
          {networks?.map((item) => {
            return (
              <SelectItem value={item.chainId} onClick={setActiveNetwork} key={item.chainId}>
                <Flex sx={{ gap: 4 }}>
                  <IconSVG icon={item?.icon} color={`${colorValues.brown}`} />
                  <Text color={`${colorValues.brown}`} sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                </Flex>
              </SelectItem>
            );
          })}
        </Select>
      )}
      <Button onClick={handleConnect}>CONNECT</Button>
      <Router>
        <Link to={`${profileLink}`}>
          <IconButton icon={icons.PROFILEICON} variant="circular" colorMode={colorMode} />
        </Link>
      </Router>
    </Box>
  );
};

export default LeftContainer;
