import React from "react";
import { ColorsProps } from "./theme";

export type FontFamily = "Aldo" | "DM Sans";

export interface SvgProps extends React.SVGProps<SVGSVGElement>{
    fillPath?: ColorsProps;
};
