import { cn } from "@/lib/utils";

interface TerminalBoxProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function TerminalBox({ children, className, animate = false }: TerminalBoxProps) {
  return (
    <div 
      className={cn(
        "terminal-box p-6 rounded-lg",
        animate && "animate-pulse-green",
        className
      )}
    >
      {children}
    </div>
  );
}
