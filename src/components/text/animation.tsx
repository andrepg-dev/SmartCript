'use client';

import { Fade } from "react-awesome-reveal";

export function AnimateText({ text }: { text: string }) {
  return (
    <Fade cascade damping={0.02} className="mb-6 text-lg -z-10">
      {text}
    </Fade>
  )
}