// src/components/atoms/Button.tsx

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "sidebar" | "sidebar2";
	fullWidth?: boolean;
	children: ReactNode;
}

export default function Button({
	children,
	className = "",
	variant = "primary",
	fullWidth = false,
	...props
}: ButtonProps) {
	const baseStyles = "py-2 rounded font-medium transition";
	const width = fullWidth ? "w-full" : "w-auto";

	const variants = {
		primary: "bg-[#A6CFF7] hover:bg-[#275C91] text-[#2A3E52] cursor-pointer",
		secondary: "bg-white hover:bg-gray-200 text-[#275C91] border border-[#275C91] cursor-pointer",
		sidebar: "bg-[#113d69] flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#1f3552] rounded w-full transition cursor-pointer",
		sidebar2: "bg-[#20558a] flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#1f3552] rounded w-full transition cursor-pointer"
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
