/** @jsxImportSource theme-ui */
import React from "react";
import { IconProps, rotation } from "./types";

const Farm: React.FC<IconProps> = ({ direction = "right", color = "brown", width, getStyles }) => {
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
    <svg width={width || "28"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M5.71448 24.3789V28.0001H0.693432C0.145681 28.0001 -0.189056 27.3915 0.11525 26.9351C1.0586 25.4135 2.76271 24.3789 4.67984 24.3789H5.71448Z"
        fill="#4D4040"
      />
      <path
        d="M23.6382 28.0001H18.6172V24.3789H19.6823C21.5994 24.3789 23.2731 25.3831 24.2468 26.9351C24.5207 27.3915 24.186 28.0001 23.6382 28.0001Z"
        fill="#4D4040"
      />
      <path
        d="M10.0052 11.5065C10.1877 11.6587 10.279 11.9021 10.279 12.1456V12.4499C10.279 12.9368 9.853 13.3628 9.33568 13.3628C8.81836 13.3628 8.39233 12.9672 8.39233 12.4499V12.1456C8.39233 11.6587 8.81836 11.2327 9.33568 11.2327C9.60956 11.2327 9.853 11.3544 10.0052 11.5065Z"
        fill="#4D4040"
      />
      <path
        d="M11.8918 15.4932C11.831 15.6149 11.6788 15.6758 11.5267 15.6149L10.9181 15.3411C10.7963 15.2802 10.7355 15.128 10.7963 14.9759C10.8268 14.8846 10.9485 14.8237 11.0398 14.8237C11.0702 14.8237 11.1006 14.8237 11.1311 14.8542L11.7397 15.128C11.8918 15.2193 11.9527 15.3715 11.8918 15.4932Z"
        fill="#4D4040"
      />
      <path
        d="M13.5352 15.0062C13.596 15.1279 13.5351 15.3105 13.4134 15.3713L12.8048 15.6452C12.6831 15.7061 12.5309 15.6452 12.4396 15.5235C12.3788 15.4018 12.4396 15.2192 12.5614 15.1583L13.17 14.8844C13.2004 14.854 13.2308 14.854 13.2613 14.854C13.4134 14.854 13.5047 14.9149 13.5352 15.0062Z"
        fill="#4D4040"
      />
      <path
        d="M15.6653 11.5065C15.8479 11.6587 15.9392 11.9021 15.9392 12.1456V12.4499C15.9392 12.9368 15.5132 13.3628 14.9958 13.3628C14.4785 13.3628 14.0525 12.9672 14.0525 12.4499V12.1456C14.0525 11.6587 14.4785 11.2327 14.9958 11.2327C15.2697 11.2327 15.5132 11.3544 15.6653 11.5065Z"
        fill="#4D4040"
      />
      <path
        d="M9.33568 13.3628C8.81836 13.3628 8.39233 12.9672 8.39233 12.4499V12.1456C8.39233 11.6587 8.81836 11.2327 9.33568 11.2327C9.60956 11.2327 9.82257 11.324 10.0052 11.5065C10.1877 11.6587 10.279 11.9021 10.279 12.1456V12.4499C10.279 12.9368 9.853 13.3628 9.33568 13.3628Z"
        fill="#4D4040"
      />
      <path
        d="M11.7701 15.1583C11.8918 15.2192 11.9527 15.3713 11.8918 15.5235C11.831 15.6452 11.6788 15.7061 11.5267 15.6452L10.9181 15.3713C10.7963 15.3105 10.7355 15.1583 10.7963 15.0062C10.8268 14.9149 10.9485 14.854 11.0398 14.854C11.0702 14.854 11.1006 14.854 11.1311 14.8844L11.7701 15.1583Z"
        fill="#4D4040"
      />
      <path
        d="M13.5352 15.0062C13.596 15.1279 13.5351 15.3105 13.4134 15.3713L12.8048 15.6452C12.6831 15.7061 12.5309 15.6452 12.4396 15.5235C12.3788 15.4018 12.4396 15.2192 12.5614 15.1583L13.17 14.8844C13.2004 14.854 13.2308 14.854 13.2613 14.854C13.4134 14.854 13.5047 14.9149 13.5352 15.0062Z"
        fill="#4D4040"
      />
      <path
        d="M14.9958 11.2327C15.2697 11.2327 15.4827 11.324 15.6653 11.5065C15.8479 11.6587 15.9392 11.9021 15.9392 12.1456V12.4499C15.9392 12.9368 15.5132 13.3628 14.9958 13.3628C14.4785 13.3628 14.0525 12.9672 14.0525 12.4499V12.1456C14.0525 11.6283 14.4785 11.2327 14.9958 11.2327Z"
        fill="#4D4040"
      />
      <path
        d="M11.8918 15.4932C11.831 15.6149 11.6788 15.6758 11.5267 15.6149L10.9181 15.3411C10.7963 15.2802 10.7355 15.128 10.7963 14.9759C10.8268 14.8846 10.9485 14.8237 11.0398 14.8237C11.0702 14.8237 11.1006 14.8237 11.1311 14.8542L11.7397 15.128C11.8918 15.2193 11.9527 15.3715 11.8918 15.4932Z"
        fill="#4D4040"
      />
      <path
        d="M13.4134 15.3411L12.8048 15.6149C12.6831 15.6758 12.5309 15.6149 12.4396 15.4932C12.3788 15.3715 12.4396 15.1889 12.5614 15.128L13.17 14.8542C13.2004 14.8237 13.2308 14.8237 13.2613 14.8237C13.3526 14.8237 13.4439 14.8846 13.5047 14.9759C13.596 15.128 13.5351 15.3106 13.4134 15.3411Z"
        fill="#4D4040"
      />
      <path
        d="M10.279 12.1456V12.4499C10.279 12.9368 9.853 13.3628 9.33568 13.3628C8.81836 13.3628 8.39233 12.9672 8.39233 12.4499V12.1456C8.39233 11.6587 8.81836 11.2327 9.33568 11.2327C9.60956 11.2327 9.82257 11.324 10.0052 11.5065C10.1877 11.6587 10.279 11.9021 10.279 12.1456Z"
        fill="#4D4040"
      />
      <path
        d="M15.9392 12.1456V12.4499C15.9392 12.9368 15.5132 13.3628 14.9958 13.3628C14.4785 13.3628 14.0525 12.9672 14.0525 12.4499V12.1456C14.0525 11.6587 14.4785 11.2327 14.9958 11.2327C15.2697 11.2327 15.4827 11.324 15.6653 11.5065C15.8479 11.6587 15.9392 11.9021 15.9392 12.1456Z"
        fill="#4D4040"
      />
      <path
        d="M26.0726 20.0576C26.0117 19.875 25.8292 19.7837 25.677 19.8446C25.2814 19.9663 24.8858 20.088 24.5206 20.1793L24.8554 18.6578C24.8858 18.4752 24.7945 18.3231 24.6119 18.2926C24.4598 18.2622 24.2772 18.3535 24.2468 18.5361L23.8512 20.3619C21.2646 20.9401 19.3474 20.8184 17.9781 20.4532C19.3779 19.2664 20.2299 17.6536 20.2299 15.8582C20.2299 15.4626 20.1995 15.067 20.1082 14.7018C20.1082 14.6714 20.1082 14.641 20.0778 14.641C20.0778 14.6105 20.0473 14.5801 20.0473 14.5497C20.4125 14.3975 20.8081 14.0932 21.1733 13.6063C22.0253 12.5413 21.9949 10.9589 21.3559 10.0155H22.0558C22.6644 10.0155 23.2426 9.77207 23.6686 9.34604C24.0642 8.92001 24.3381 8.37226 24.3381 7.73322C24.3381 7.30719 24.0033 6.97245 23.5773 6.97245H19.317V3.62508C19.317 3.50336 19.317 3.41207 19.317 3.29035C19.1649 1.12978 17.0956 -0.330893 14.9959 0.0647046C13.0787 0.429872 11.2225 0.460302 9.39664 0.0951352C7.2665 -0.330893 5.16678 1.12978 5.01463 3.29035C5.01463 3.38164 5.01463 3.50336 5.01463 3.59465V6.88116H0.784776C0.571762 6.88116 0.389179 6.97245 0.267457 7.09417C0.115304 7.2159 0.0544434 7.42891 0.0544434 7.64192C0.0544434 8.88958 1.05865 9.92422 2.30631 9.92422H2.94535C2.30631 10.8676 2.30631 12.4195 3.12793 13.515C3.4931 14.0019 3.91913 14.3062 4.2843 14.4584C4.2843 14.4888 4.2843 14.5192 4.25387 14.5497C4.25387 14.5801 4.25387 14.6105 4.22343 14.641C4.13214 15.0061 4.10171 15.4017 4.10171 15.7973C4.10171 18.5056 6.0797 20.8488 8.90975 21.8834C8.97061 21.9139 9.03147 21.9139 9.09233 21.9443V24.3483H7.99683V28H16.3348V24.3788H15.1785V21.9747C15.9696 21.7009 16.7 21.3661 17.339 20.9097C18.1607 21.1835 19.1649 21.3661 20.4125 21.3661C20.8081 21.3661 21.2341 21.3357 21.6602 21.3053C21.6906 21.3357 21.721 21.3357 21.7515 21.3661L25.0684 22.5833C25.0988 22.5833 25.1293 22.6138 25.1597 22.6138C25.2814 22.6138 25.4031 22.5225 25.464 22.4008C25.5249 22.2486 25.4336 22.066 25.2814 22.0052L22.9687 21.1531C23.8512 21.001 24.825 20.7879 25.89 20.4532C26.0422 20.3923 26.1335 20.2098 26.0726 20.0576ZM17.3999 15.0974C17.552 15.5235 17.6738 16.0103 17.6738 16.3755C17.6738 17.6232 17.0956 18.7795 16.1827 19.6316C15.361 19.1143 14.9654 18.5665 14.8133 18.3231C14.935 18.2013 15.0263 18.0492 15.1176 17.897C15.2089 17.7449 15.1785 17.5623 15.0263 17.471C14.8741 17.3797 14.6916 17.4101 14.6003 17.5623C14.083 18.3535 13.17 18.8404 12.1658 18.8404C11.1616 18.8404 10.2183 18.3535 9.73138 17.5623C9.64008 17.4101 9.4575 17.3797 9.30534 17.471C9.15319 17.5623 9.12276 17.7753 9.21405 17.897C9.82266 18.8708 10.979 19.449 12.1963 19.449C12.9874 19.449 13.7482 19.1751 14.3568 18.7491C14.5394 19.0534 14.9654 19.5707 15.6653 20.0576C14.722 20.7271 13.5048 21.1227 12.1963 21.1227C9.15319 21.1227 6.68832 18.9925 6.68832 16.3451C6.68832 15.9799 6.81004 15.493 6.96219 15.067C7.14477 14.4888 7.05348 13.8802 6.74918 13.3629C6.65788 13.2412 6.59702 13.1194 6.53616 12.9977C6.35358 12.6021 6.26228 12.1761 6.26228 11.7501C6.26228 11.0806 6.4753 10.472 6.84047 9.95465H17.5216C17.8868 10.472 18.0998 11.0806 18.0998 11.7501C18.0998 12.2065 18.0085 12.6325 17.8259 13.0281C17.7651 13.1499 17.7042 13.2716 17.6129 13.3933C17.3086 13.9106 17.2173 14.5497 17.3999 15.0974Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Farm;
