/** @jsxImportSource theme-ui */
import React from "react";
import { motion } from "framer-motion";
import { ProgressProps } from "./types";

const Progress: React.FC<ProgressProps> = ({
  height = "15px",
  from = 0,
  to = 50,
  color = "gradient",
  background = "white4",
}) => {
  return (
    <div
      sx={{
        width: "100%",
        border: 0,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        sx={{
          height,
          background,
          border: 0,
          borderRadius: "normal",
        }}
      />
      <motion.div
        initial={{ width: `${from}%` }}
        animate={{ width: `${to}%` }}
        transition={{ duration: 0.5 }}
        sx={{
          height,
          top: 0,
          border: 0,
          background: color,
          position: "absolute",
          borderRadius: "normal",
        }}
      />
    </div>
  );
};

export default Progress;
