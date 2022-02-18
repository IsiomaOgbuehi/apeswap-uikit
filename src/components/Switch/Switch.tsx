/** @jsxImportSource theme-ui */
import React, { useState, useEffect, useRef } from "react";
import { Box } from "theme-ui";
import { Button } from "../Button";
import { Text } from "../Text";
import { SwitchProps } from "./types";
import styles from "./styles";

const Switch: React.FC<SwitchProps> = ({ checked, labels, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = () => {
    setIsChecked(!isChecked);
    inputRef?.current?.click();
  };

  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          ...styles.switch,
          background: "white3",
          color: "primaryButtonDisable",
        }}
        onClick={handleClick}
      >
        <Text variant="sm" weight="bold">
          {labels[0]}
        </Text>
      </Box>

      <Box
        sx={{
          ...styles.switch,
          background: "white3",
          color: "primaryButtonDisable",
        }}
        onClick={handleClick}
      >
        <Text variant="sm" weight="bold">
          {labels[1]}
        </Text>
      </Box>
      <Button
        csx={{
          ...styles.button,
          left: isChecked ? "50%" : 0,
        }}
      >
        {isChecked ? labels[1] : labels[0]}
      </Button>
      <input
        type="checkbox"
        ref={inputRef}
        checked={isChecked}
        aria-hidden="true"
        tabIndex={-1}
        {...props}
        sx={styles.input}
      />
    </Box>
  );
};

export default Switch;
