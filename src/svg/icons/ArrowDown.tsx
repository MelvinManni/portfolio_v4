import * as React from "react";
import { SvgProps } from "types";

const SVGComponent = (props: SvgProps) => (
  <svg
    width={15}
    height={17}
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.27441 15.75V0.75"
      stroke="#98D4C5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.2988 9.7002L7.27476 15.7502L1.24976 9.7002"
      stroke="#98D4C5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SVGComponent;
