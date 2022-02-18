/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Settings: React.FC<IconProps> = ({ direction = "down", color = "brown", width, getStyles }) => {
  const deg: rotation = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "10"} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M7.52848 0C8.08572 0 8.59024 0.315 8.86886 0.78C9.0044 1.005 9.09477 1.2825 9.07218 1.575C9.05712 1.8 9.12489 2.025 9.24537 2.235C9.62941 2.8725 10.4803 3.1125 11.143 2.7525C11.8885 2.3175 12.8298 2.58 13.259 3.3225L13.7635 4.2075C14.2003 4.95 13.9593 5.9025 13.2063 6.33C12.5662 6.7125 12.3403 7.56 12.7243 8.205C12.8448 8.4075 12.9804 8.58 13.1912 8.685C13.4548 8.8275 13.6581 9.0525 13.8011 9.2775C14.0798 9.7425 14.0572 10.3125 13.7861 10.815L13.259 11.715C12.9804 12.195 12.4608 12.495 11.9261 12.495C11.6626 12.495 11.3689 12.42 11.1279 12.27C10.9321 12.1425 10.7062 12.0975 10.4653 12.0975C9.71977 12.0975 9.09477 12.72 9.07218 13.4625C9.07218 14.325 8.3794 15 7.51342 15H6.48931C5.61581 15 4.92303 14.325 4.92303 13.4625C4.90797 12.72 4.28296 12.0975 3.53747 12.0975C3.28897 12.0975 3.06307 12.1425 2.87481 12.27C2.63384 12.42 2.33264 12.495 2.07661 12.495C1.53443 12.495 1.01485 12.195 0.736231 11.715L0.216646 10.815C-0.0619717 10.3275 -0.0770321 9.7425 0.201586 9.2775C0.322069 9.0525 0.547976 8.8275 0.804003 8.685C1.01485 8.58 1.15039 8.4075 1.27841 8.205C1.65492 7.56 1.42901 6.7125 0.788942 6.33C0.0434513 5.9025 -0.197516 4.95 0.231707 4.2075L0.736231 3.3225C1.17298 2.58 2.10673 2.3175 2.85975 2.7525C3.51488 3.1125 4.36579 2.8725 4.74983 2.235C4.87032 2.025 4.93809 1.8 4.92303 1.575C4.90797 1.2825 4.9908 1.005 5.13387 0.78C5.41249 0.315 5.91702 0.015 6.46672 0H7.52848ZM7.0089 5.385C5.82665 5.385 4.87032 6.33 4.87032 7.5075C4.87032 8.685 5.82665 9.6225 7.0089 9.6225C8.19114 9.6225 9.12489 8.685 9.12489 7.5075C9.12489 6.33 8.19114 5.385 7.0089 5.385Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Settings;
