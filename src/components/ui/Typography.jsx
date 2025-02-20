import { cn } from "@/lib/utils";

export function Typography({ variant = "p", className, children }) {
  const baseStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    small: "text-sm text-gray-500",
    muted: "text-sm text-gray-400",
  };

  const Tag = variant;

  return <Tag className={cn(baseStyles[variant], className)}>{children}</Tag>;
}
