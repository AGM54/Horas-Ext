interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-[#A6CFF7] hover:bg-[#275C91] text-[#2A3E52] font-medium py-2 rounded transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}