interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ className = "", ...props }: InputProps) {
	return (
		<input
			{...props}
			className={`w-full px-4 py-2 rounded bg-gray-300 placeholder-gray-700 outline-none ${className}`}
		/>
	);
}