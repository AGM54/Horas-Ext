import type { Colors, sizes, Typography } from "../types";
import { defaultColors } from "./colors";
import { getDeviceScaling } from "./hooks"; // Import the static function
import { Sizes } from "./sizes";
import { Letters } from "./typography";

// Get scaling function (safe outside React components)
const { scale } = getDeviceScaling(typeof window !== "undefined" ? window.innerWidth : 1024);

export interface Theme {
    colors: Colors;
    sizes: sizes;
    scale: (value: number, factor?: number) => number;
    typography: Typography;
}

export const MainTheme: Theme = {
    colors: defaultColors,
    sizes: Sizes,
    scale,
    typography: Letters
};
