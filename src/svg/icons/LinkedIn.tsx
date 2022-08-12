import { Path } from "jss/misc";
import * as React from "react";
import { SvgProps } from "types";

const SVGComponent = (props: SvgProps) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M4.48711 6.53442H0.334961V19.7754H4.48711V6.53442Z" fillColor={props.fillPath || "mint"} />
    <Path
      d="M15.7189 6.24735C15.5658 6.22822 15.4032 6.21865 15.2405 6.20909C12.9157 6.11341 11.605 7.49108 11.1458 8.08425C11.0214 8.24689 10.964 8.34256 10.964 8.34256V6.57264H6.99365V19.8136H10.964H11.1458C11.1458 18.4646 11.1458 17.1252 11.1458 15.7762C11.1458 15.0491 11.1458 14.322 11.1458 13.5949C11.1458 12.6956 11.0788 11.7389 11.5285 10.9161C11.9112 10.2273 12.6 9.88287 13.3749 9.88287C15.6711 9.88287 15.7189 11.9589 15.7189 12.1503C15.7189 12.1599 15.7189 12.1694 15.7189 12.1694V19.871H19.871V11.2318C19.871 8.27559 18.369 6.53437 15.7189 6.24735Z"
      fillColor={props.fillPath || "mint"}
    />
    <Path
      d="M2.41092 4.82185C3.74243 4.82185 4.82185 3.74244 4.82185 2.41092C4.82185 1.07941 3.74243 0 2.41092 0C1.0794 0 0 1.07941 0 2.41092C0 3.74244 1.0794 4.82185 2.41092 4.82185Z"
      fillColor={props.fillPath || "mint"}
    />
  </svg>
);

export default SVGComponent;
