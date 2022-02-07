/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Twitter: React.FC<IconProps> = ({ direction = "right", color = "white", width, getStyles }) => {
  const deg: rotation = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg
      width={width || "27"}
      height="auto"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={style}
    >
      <path
        d="M26.7504 3.35709C25.8006 3.78243 24.7804 4.06982 23.7078 4.19972C24.8145 3.53043 25.6425 2.47705 26.0372 1.23613C24.9974 1.86034 23.8595 2.29971 22.6728 2.53515C21.8748 1.67397 20.8177 1.10316 19.6659 0.911352C18.514 0.719545 17.3317 0.917465 16.3025 1.47439C15.2733 2.03131 14.4548 2.91607 13.9741 3.99131C13.4934 5.06655 13.3774 6.2721 13.6441 7.42081C11.5373 7.31389 9.47624 6.76044 7.59475 5.79636C5.71326 4.83228 4.05337 3.47913 2.72279 1.82471C2.26783 2.61791 2.00623 3.53757 2.00623 4.517C2.00572 5.39871 2.22055 6.26692 2.63166 7.04459C3.04277 7.82226 3.63744 8.48535 4.36292 8.97502C3.52156 8.94796 2.69876 8.71819 1.96301 8.30482V8.3738C1.96292 9.61043 2.38616 10.809 3.1609 11.7662C3.93564 12.7233 5.01416 13.3801 6.21347 13.625C5.43297 13.8385 4.61467 13.87 3.82038 13.717C4.15875 14.781 4.81787 15.7115 5.70547 16.3781C6.59306 17.0448 7.6647 17.4142 8.77034 17.4347C6.89344 18.9238 4.57548 19.7316 2.18935 19.7281C1.76667 19.7282 1.34435 19.7032 0.924561 19.6534C3.34663 21.2273 6.16608 22.0626 9.04559 22.0594C18.7931 22.0594 24.1218 13.8998 24.1218 6.82303C24.1218 6.59312 24.1161 6.36091 24.1059 6.13099C25.1424 5.3734 26.0371 4.43526 26.7481 3.36054L26.7504 3.35709Z"
        fill="white"
      />
    </svg>
  );
};

export default Twitter;