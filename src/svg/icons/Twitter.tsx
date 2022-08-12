import { Path } from "jss/misc";
import * as React from "react";
import { SvgProps } from "types";

const SVGComponent = (props: SvgProps) => (
  <svg
    width={20}
    height={17}
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 14.3921C2.06673 14.5087 3.874 14.0243 5.63653 12.7414C3.8561 12.4364 2.62144 11.6201 1.95042 9.93357C2.46934 9.8618 2.92564 9.99637 3.46245 9.78107C1.70886 9.00957 0.572602 7.85234 0.527868 5.85184C1.08257 5.8967 1.50308 6.2645 2.16515 6.21068C0.554713 4.63181 0.0626281 2.90941 1.07363 0.81921C2.75564 2.75691 4.72396 4.07562 7.13067 4.69461C7.26487 4.73049 7.39012 4.76637 7.52432 4.79329C8.14166 4.93682 8.87531 5.24183 9.25108 5.19697C9.89525 5.11624 9.25108 4.37166 9.41212 3.40281C9.9221 0.38861 13.2324 -0.983926 15.6839 0.783326C16.3996 1.30363 16.9633 1.29466 17.6701 0.980685C18.0369 0.81921 18.4127 0.657735 18.8511 0.469348C18.7527 1.33055 18.0906 1.806 17.5627 2.44293C18.1622 2.57749 18.6453 2.40705 19.2 2.22763C19.0121 2.84662 18.5469 3.19648 18.1264 3.53737C17.688 3.88723 17.518 4.25504 17.5001 4.82917C17.2317 13.5219 7.38118 20.2411 0.644182 14.8944C-0.00894034 14.3741 0.626282 14.8944 0 14.3921Z"
      fillColor={props.fillPath || "mint"}
    />
  </svg>
);

export default SVGComponent;
