import { cn } from "@/lib/utils";

interface SplitGlitchTextProps {
  text: string;
  className?: string;
}

export default function SplitGlitchText({ text, className }: SplitGlitchTextProps) {
  // Split text into three parts
  const textLength = text.length;
  const firstThird = Math.floor(textLength / 3);
  const secondThird = Math.floor((textLength * 2) / 3);
  
  const firstPart = text.slice(0, firstThird);
  const middlePart = text.slice(firstThird, secondThird);
  const lastPart = text.slice(secondThird);

  return (
    <span className={cn("glitch-subtle", className)} data-testid="split-glitch-text">
      <span className="relative" data-testid="text-first-part">
        {firstPart}
      </span>
      <span className="glitch-middle relative" data-testid="text-middle-part">
        {middlePart}
      </span>
      <span className="relative" data-testid="text-last-part">
        {lastPart}
      </span>
    </span>
  );
}