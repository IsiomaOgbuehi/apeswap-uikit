/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Calculator: React.FC<IconProps> = ({ direction = "right", color = "brown", width, getStyles }) => {
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
    <svg width={width || "19"} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M2.28582 0H16.7176C16.9437 0.0678094 17.1776 0.120017 17.3948 0.207029C18.4064 0.627087 19.0014 1.56982 19.0014 2.74838C19.0014 8.58 19.0014 14.4118 19.0014 20.2438C19.0014 20.311 19.0014 20.3782 19.0014 20.446C18.958 21.8526 17.8256 22.9928 16.4314 22.9952C11.8146 23.0024 7.19718 23 2.57918 22.988C2.22344 22.9835 1.87265 22.9034 1.54974 22.7528C0.517326 22.2661 0.00736465 21.4194 0.00736465 20.266V5.39835C0.00736465 4.47002 -0.00096607 3.54169 0.00736465 2.61336C0.0156954 1.68503 0.420332 0.93313 1.20283 0.435061C1.52594 0.229832 1.92403 0.14162 2.28582 0ZM9.52581 2.875C7.87117 2.875 6.21673 2.875 4.56249 2.875C3.5753 2.875 2.86778 3.5855 2.85528 4.58344C2.84933 5.0395 2.84933 5.49577 2.85528 5.95223C2.86659 6.93937 3.55745 7.66187 4.53631 7.66487C7.84559 7.67487 11.1545 7.67487 14.463 7.66487C15.4436 7.66187 16.1345 6.94477 16.1481 5.95523C16.1541 5.52137 16.1481 5.08751 16.1481 4.65365C16.1434 3.5735 15.4507 2.8744 14.3767 2.8738L9.52581 2.875ZM5.70677 18.2431C5.94479 18.4904 6.15247 18.7124 6.36133 18.9314C6.43335 19.0129 6.52345 19.076 6.62429 19.1157C6.72512 19.1553 6.83382 19.1703 6.9415 19.1595C7.23189 19.1301 7.44492 18.9794 7.54607 18.701C7.5989 18.5717 7.61171 18.4293 7.58282 18.2926C7.55394 18.1558 7.4847 18.0311 7.38422 17.9347C7.16227 17.7073 6.93258 17.4882 6.69158 17.2518C6.94507 17.001 7.17417 16.7879 7.3872 16.5593C7.73233 16.1885 7.63355 15.619 7.19559 15.4053C7.06146 15.3379 6.90936 15.3158 6.76179 15.3422C6.61422 15.3687 6.47903 15.4424 6.3762 15.5524C6.15068 15.775 5.93646 16.0102 5.70439 16.2533C5.45804 15.9994 5.2468 15.7792 5.03317 15.5608C4.95977 15.4805 4.86887 15.4186 4.76767 15.3799C4.66647 15.3411 4.55773 15.3266 4.45002 15.3375C4.31576 15.3451 4.18679 15.3928 4.07961 15.4747C3.97243 15.5566 3.89194 15.6689 3.84843 15.7972C3.79562 15.9227 3.78191 16.0614 3.80912 16.195C3.83633 16.3285 3.90317 16.4506 4.00076 16.5449C4.22628 16.7795 4.46609 16.9992 4.71839 17.244C4.47085 17.484 4.25365 17.6905 4.04598 17.9041C3.73477 18.2227 3.71989 18.6542 4.00254 18.9464C4.28519 19.2387 4.73148 19.2387 5.05281 18.92C5.26405 18.7088 5.46756 18.491 5.70677 18.2431ZM4.99271 12.2171C4.99271 12.3791 4.99271 12.5123 4.99271 12.645C4.99926 13.0896 5.28667 13.4077 5.68892 13.4173C6.09118 13.4269 6.40298 13.0968 6.41667 12.648C6.42024 12.5093 6.41667 12.3701 6.41667 12.2171C6.59518 12.2171 6.74395 12.2213 6.89271 12.2171C7.0708 12.2023 7.23691 12.1207 7.35824 11.9883C7.47956 11.856 7.54729 11.6827 7.54803 11.5025C7.54878 11.3222 7.48249 11.1483 7.36227 11.015C7.24205 10.8816 7.07662 10.7986 6.89866 10.7823C6.74513 10.7769 6.59161 10.7823 6.4131 10.7823C6.4131 10.5867 6.42738 10.4145 6.4131 10.2458C6.39892 10.06 6.31387 9.887 6.17583 9.76312C6.03778 9.63924 5.8575 9.57415 5.67285 9.58153C5.28964 9.60194 5.00699 9.89898 4.9939 10.3016C4.98914 10.4559 4.9939 10.6101 4.9939 10.7817C4.80884 10.7817 4.65412 10.7769 4.50001 10.7817C4.32253 10.7971 4.15717 10.8788 4.03637 11.0108C3.91557 11.1428 3.84806 11.3156 3.84709 11.4952C3.84612 11.6749 3.91176 11.8484 4.03113 11.9817C4.1505 12.115 4.31497 12.1986 4.49227 12.2159C4.64639 12.2225 4.8017 12.2171 4.99211 12.2171H4.99271ZM13.3092 12.4535C13.687 12.4535 14.0649 12.4565 14.4398 12.4535C14.8807 12.4487 15.1943 12.1535 15.2002 11.7496C15.2062 11.3458 14.8884 11.0229 14.4386 11.0193C13.6757 11.0133 12.9128 11.0133 12.15 11.0193C11.7073 11.0235 11.4056 11.3248 11.405 11.7394C11.4044 12.1541 11.7085 12.4481 12.1512 12.4535C12.5386 12.4571 12.9236 12.4535 13.3086 12.4535H13.3092ZM13.2949 16.7657C13.6799 16.7657 14.0655 16.7693 14.4505 16.7657C14.8884 16.7603 15.2014 16.4609 15.2032 16.054C15.205 15.6472 14.8932 15.3339 14.4558 15.3339C13.6858 15.3267 12.9156 15.3267 12.1452 15.3339C11.7043 15.3387 11.405 15.646 11.408 16.0612C11.4109 16.4765 11.7162 16.7573 12.1589 16.7645C12.5392 16.7687 12.9164 16.7657 13.2943 16.7657H13.2949ZM13.3074 19.1661C13.7001 19.1661 14.0928 19.1763 14.485 19.1661C14.9069 19.1523 15.208 18.8366 15.2032 18.4376C15.1984 18.0385 14.8884 17.7373 14.4653 17.7343C13.6874 17.7291 12.9099 17.7291 12.1327 17.7343C12.0076 17.7364 11.8845 17.7663 11.7721 17.8219C11.6331 17.8958 11.523 18.0151 11.4598 18.1603C11.3965 18.3054 11.384 18.4679 11.424 18.6212C11.4972 18.9302 11.7811 19.1559 12.1298 19.1643C12.5213 19.1757 12.914 19.1685 13.3068 19.1679L13.3074 19.1661Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Calculator;
