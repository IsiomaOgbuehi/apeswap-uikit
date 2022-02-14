import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import { Button } from "../Button";
import { SwitchProps } from "./types";
import styles from "./styles";

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Box
      sx={{
        ...styles.switch,
        background: "white3",
      }}
    >
      <Button
        sx={{
          ...styles.switch,
          background: isChecked ? "white3" : undefined,
          color: isChecked ? "primaryButtonDisable" : undefined,
        }}
        onClick={handleClick}
      >
        Switch
      </Button>

      <Button
        sx={{
          ...styles.switch,
          background: isChecked ? undefined : "white3",
          color: isChecked ? undefined : "primaryButtonDisable",
        }}
        onClick={handleClick}
      >
        Switch
      </Button>
    </Box>
  );
};

export default Switch;
