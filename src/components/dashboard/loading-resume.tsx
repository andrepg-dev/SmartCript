'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { closeYTDialog } from "../redux/slice/open-yt-dialog";
import { AnimateText } from "../text/animation";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoadingResume() {
  const { isOpen } = useAppSelector(state => state.openYtDialog);
  const { transcription, videoDetails } = useAppSelector(state => state.YTextractedText);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isData = transcription.length > 0

  const closeDialog = () => {
    dispatch(closeYTDialog())
  }

  return (
    <>
      <div className={cn(
        'min-h-[100dvh] w-full fixed z-10 pointer-events-none transition',
        !isOpen && 'bg-transparent',
        isOpen && 'bg-black/30 dark:bg-black/70 backdrop-blur-sm',
      )}
      ></div>

      <section className={cn(
        'min-h-[100dvh] flex items-center justify-center h-full fixed w-full z-10 transition',
        !isOpen && 'opacity-0 pointer-events-none',
        isOpen && 'opacity-100 pointer-events-auto',

      )}
        onClick={() => closeDialog()}
      >
        <div
          className="bg-white dark:bg-[#0a0a0a] w-1/2 rounded-md aspect-video translate-x-[-140px] border p-6 shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            {!isData && (
              <AnimateText text="Extrayendo el texto del video..." className="text-lg font-semibold md:text-2xl" />
            )}

            {isData && (
              <>
                <span className="text-lg font-semibold md:text-2xl">Proceso completado</span>
                <CircleCheck className="fill-background dark:fill-green-700 text-green-700 dark:text-white" />
              </>
            )}
          </div>

          {isData && (
            <div className="flex gap-2 mt-4 w-full h-[180px]">
              <img
                src={videoDetails.thumbnails[3]}
                alt={'portada del video: ' + videoDetails.title}
                className="min-w-80 w-80 max-w-80 object-cover aspect-video rounded-md overflow-hidden"
              />

              <div className="flex flex-col w-full gap-2 relative overflow-hidden">
                <span className="font-medium text-wrap break-words">{videoDetails.title}</span>
                <div className="flex gap-1 w-full h-40 relative overflow-hidden">
                  <pre className="text-sm text-wrap font-sans break-words">
                    {videoDetails.description}
                  </pre>

                  <div className="absolute -bottom-6 -left-8 bg-background dark:bg-[#0a0a0a] w-[120%] h-24 blur-xl"></div>
                </div>
              </div>
            </div>
          )}

          {!isData && (
            <div className="flex gap-2 mt-4 w-full">
              <Skeleton className="aspect-video min-w-80" />
              <div className="flex flex-col w-full gap-2">
                <Skeleton className="w-full h-6" />
                <div className="flex items-center gap-1">
                  <Skeleton className="w-6 h-6 rounded-full aspect-square" />
                  <Skeleton className="w-full h-6 rounded-3xl" />
                </div>
              </div>
            </div>
          )}


          {isData && (
            <div className="mt-4">
              ¡El proceso de transcripción se ha completado con <span className="text-green-500">éxito!</span><br /> Todo el contenido hablado 
              en el vídeo ha sido convertido a texto y se resumirá con <span className="text-green-500">inteligencia artificial</span> de forma gratuita. ✨ 
              
            </div>
          )}

          {!isData && (
            <div className="mt-4">
              Resume tus vídeos de YouTube con solo un enlace! <br />
              <span className="text-purple">Chatea con nuestro asistente de IA</span> para que obtengas más detalles del video proporcionado. ✨
            </div>
          )}

          <div className="mt-6 flex gap-2">
            <Button
              disabled={!isData}
              onClick={() => {
                closeDialog()
                router.push('/dashboard/youtube')
              }}
            >
              Empezar
            </Button>
            <Button
              variant="secondary"
              onClick={() => closeDialog()}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </section >
    </>
  )
}

