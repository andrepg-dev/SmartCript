'use client'

import { useAppSelector } from "@/hooks/redux"

export default function YoutubePage() {

  const { link, transcription } = useAppSelector(state => state.YTextractedText);
  const text = Array.isArray(transcription) && transcription.map((item: any) => item.text).join(' ');

  return (
    <main className="p-6">
      <h1>YouTube</h1>
      <p>Link: {link}</p>
      {/* {transcription.map((item: { text: string, duration: number, offset: number }) => (
        <div key={item.duration} className="flex items-center gap-1">
          <span className="text-purple font-medium">{item.duration}</span>
          <span>{item.text}</span>
        </div>
      ))} */}

      {text}
    </main>
  )
}


// {
//   text: 'boludo estoy hasta acá hasta la Happy',
//   duration: 2.84,
//   offset: 0.16,
//   lang: 'es'
// },