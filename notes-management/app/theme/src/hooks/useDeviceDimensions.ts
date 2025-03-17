import { useEffect, useState } from "react";

// Define screen size categories
const DEVICE_SIZES = {
    small: 600,   // Phones
    medium: 1024, // Tablets
    large: 1920,  // Desktops
    xlarge: 2560  // Ultra-wide monitors
};

// Define the golden ratio
const GOLDEN_RATIO = 1.618;

// Define base sizes for each category
const BASE_SIZES = {
    small: 4,   // Phones
    medium: 6,  // Tablets
    large: 10,  // Desktops
    xlarge: 16  // Ultra-wide monitors
};

export const getDeviceScaling = (screenWidth: number) => {
    let deviceType: keyof typeof BASE_SIZES = "small";

    if (screenWidth >= DEVICE_SIZES.xlarge) deviceType = "xlarge";
    else if (screenWidth >= DEVICE_SIZES.large) deviceType = "large";
    else if (screenWidth >= DEVICE_SIZES.medium) deviceType = "medium";

    const baseSize = BASE_SIZES[deviceType];

    const scale = (value: number, factor: number = 1) => {
        return Math.round(value + (screenWidth / DEVICE_SIZES.medium) * factor);
    };

    return { deviceType, scale };
};


export const useDeviceScaling = () => {
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : DEVICE_SIZES.medium
    );

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let deviceType: keyof typeof BASE_SIZES = "small";
    if (screenWidth >= DEVICE_SIZES.xlarge) deviceType = "xlarge";
    else if (screenWidth >= DEVICE_SIZES.large) deviceType = "large";
    else if (screenWidth >= DEVICE_SIZES.medium) deviceType = "medium";

    const baseSize = BASE_SIZES[deviceType];
    
    // Scale function that calculates size based on screen width
    const scale = (value: number, factor: number = 1) => {
        return Math.round(value + (screenWidth / DEVICE_SIZES.medium) * factor);
    };

    return { deviceType, scale };
};
