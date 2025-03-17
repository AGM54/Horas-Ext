import type { Typography } from "../types";
import { getDeviceScaling } from "./hooks";

const { scale } = getDeviceScaling(typeof window !== "undefined" ? window.innerWidth : 1024);

export const Letters : Typography = {
    H1: {
        color: "G0",
        fontWeight: "medium",
        fontSize: scale(64),
        letterSpacing: 0
    },
    H2: {
        color: "G0",
        fontWeight: "medium",
        fontSize: scale(48),
        letterSpacing: 0
    },
    H3: {
        color: "G0",
        fontWeight: "regular",
        fontSize: scale(40),
        letterSpacing: 0
    },
    H4: {
        color: "G0",
        fontWeight: "regular",
        fontSize: scale(36),
        letterSpacing: 0
    },
    H5: {
        color: "G0",
        fontWeight: "regular",
        fontSize: scale(32),
        letterSpacing: 0
    },
    body_large: {
        color: "G0",
        fontWeight: "regular",
        fontSize: scale(24),
        letterSpacing: 0
    },
    body_medium: {
        color: "G0",
        fontWeight: "light",
        fontSize: scale(20),
        letterSpacing: 0
    },
    body: {
        color: "G0",
        fontWeight: "light",
        fontSize: scale(16),
        letterSpacing: 0
    },
    body_small: {
        color: "G0",
        fontWeight: "light",
        fontSize: scale(14),
        letterSpacing: 0
    }
}