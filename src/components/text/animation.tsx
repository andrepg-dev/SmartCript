'use client';

import { cn } from "@/lib/utils";
import { Fade } from "react-awesome-reveal";

export function AnimateText({ text, className }: { text: string, className?: string }) {
  return (
    <Fade cascade damping={0.02} className={cn('text-lg -z-10', className)}>
      {text}
    </Fade>
  )
}