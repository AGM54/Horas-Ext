import { MainTheme } from "../../../app/theme/src";

interface TextProps {
  children: React.ReactNode;
  variant?: keyof typeof MainTheme.typography;
  className?: string;
  style?: React.CSSProperties; 
}

export default function Text({ children, variant = "body", className = "", style }: TextProps) {
  const styles = MainTheme.typography[variant];

  return (
    <span
      className={`font-${styles.fontWeight} text-[${styles.fontSize}px] text-${styles.color} ${className}`}
      style={{ letterSpacing: styles.letterSpacing, ...style }} 
    >
      {children}
    </span>
  );
}
