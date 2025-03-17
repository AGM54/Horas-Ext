import type { sizes } from "../types";
import { getDeviceScaling } from "./hooks";

const { scale } = getDeviceScaling(typeof window !== "undefined" ? window.innerWidth : 1024);

export const Sizes : sizes = {
    xxxs: scale(4),
    xxs: scale(6),
    xs: scale(10),
    sm: scale(16),
    md: scale(26),
    lg: scale(42),
    xl: scale(68),
    xxl: scale(110),
    xxxl: scale(178)
}