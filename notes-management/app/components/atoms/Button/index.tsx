// src/components/atoms/Button.tsx

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
	children: ReactNode;
}

export default function Button({
	children,
	className = "",
	variant = "primary",
	fullWidth = true,
	...props
}: ButtonProps) {
	const baseStyles = "py-2 rounded font-medium transition";
	const width = fullWidth ? "w-full" : "w-auto";

	const variants = {
		primary: "bg-[#A6CFF7] hover:bg-[#275C91] text-[#2A3E52]",
		secondary: "bg-white hover:bg-gray-200 text-[#275C91] border border-[#275C91]",
	};

	return (
		<button
			className={`${baseStyles} ${width} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
