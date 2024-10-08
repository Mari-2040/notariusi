import React from "react";

interface ArrowIconProps {
  className?: string;
}
const ArrowIcon = (props: ArrowIconProps) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.23966 8.20041C6.5432 7.91856 7.01775 7.93613 7.2996 8.23966L10 11.1478L12.7004 8.23966C12.9823 7.93613 13.4568 7.91856 13.7603 8.20041C14.0639 8.48226 14.0815 8.95681 13.7996 9.26034L10.5496 12.7603C10.4077 12.9132 10.2086 13 10 13C9.79145 13 9.59232 12.9132 9.45041 12.7603L6.20041 9.26034C5.91856 8.95681 5.93613 8.48226 6.23966 8.20041Z"
        fill="#4A4A4A"
      />
    </svg>
  );
};

export default ArrowIcon;
