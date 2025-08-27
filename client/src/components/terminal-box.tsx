import { cn } from "@/lib/utils";

interface TerminalBoxProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}

export default function TerminalBox({ children, className, animate = false, style }: TerminalBoxProps) {
  return (
    <div 
      className={cn(
        "terminal-box p-6 rounded-lg",
        animate && "animate-pulse-green",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
