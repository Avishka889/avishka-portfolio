import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950";

  const variants = {
    primary:
      "bg-white text-slate-950 hover:bg-slate-200 hover:shadow-xl hover:shadow-white/10",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
  };

  return (
    <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Button;