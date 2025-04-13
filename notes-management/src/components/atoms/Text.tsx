import { MainTheme } from "../../../app/theme/src";



interface TextProps {
  children: React.ReactNode;
  variant?: keyof typeof MainTheme.typography;
  className?: string;
}

export default function Text({ children, variant = "body", className = "" }: TextProps) {
  const style = MainTheme.typography[variant];
  return (
    <span
      className={`font-${style.fontWeight} text-[${style.fontSize}px] text-${style.color} ${className}`}
      style={{ letterSpacing: style.letterSpacing }}
    >
      {children}
    </span>
  );
}