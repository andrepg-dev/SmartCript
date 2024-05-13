import { cn } from "@/lib/utils";

export default function GradientText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span style={{ backgroundSize: '200%'}} className={cn(`bg-clip-text text-transparent animate-text-gradient `, className)}>{children}</span>
  )
}


// #adadad