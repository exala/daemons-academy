import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  dataText?: string;
  intense?: boolean;
}

export default function GlitchText({ children, className, dataText, intense = false }: GlitchTextProps) {
  return (
    <span 
      className={cn(
        "glitch-text",
        intense ? "glitch-intense" : "animate-glitch",
        className
      )} 
      data-text={dataText || children}
    >
      {children}
    </span>
  );
}
