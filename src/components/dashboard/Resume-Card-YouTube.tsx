'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import getVideoId from "get-video-id";
import { ClipboardPaste, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { clearText, setText } from "../redux/slice/YT-stracted-text";
import { closeYTDialog, openYTDialog } from "../redux/slice/open-yt-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

type ResumeCardProps = {
  Icon: any;
  title: string;
  description: string;
}

export default function ResumeYouTubeCard({ Icon, title, description }: ResumeCardProps) {
  const [ytUrl, setYtUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [data, setData] = useState<any>()
  const { toast } = useToast();

  const [lastProcessedUrl, setLastProcessedUrl] = useState<string>("");

  const dispatch = useAppDispatch();
  const { transcription } = useAppSelector(state => state.YTextractedText);

  const handlePaste = async () => {
    await navigator.clipboard.readText().then(async (text) => {
      setYtUrl(text)
      await handleClick({ url: text })
    })
  }

  useEffect(() => {
    const isValid = (url: string) => {
      const isYoutube = getVideoId(url).service === 'youtube' && getVideoId(url).id ? true : false
      return isYoutube
    }
    setIsValid(isValid(ytUrl))
  }, [ytUrl])

  const handleClick = async ({ url }: { url: string }) => {

    if (lastProcessedUrl === url && data.error) {
      return toast({
        variant: 'destructive',
        title: 'El video no tiene transcripción disponible.',
        description: (
          <div className="flex gap-2 mt-1">
            <img src={data.videoDetails.thumbnails[1]} className="h-14 object-cover aspect-video rounded-md overflow-hidden"></img>
            <div className="flex flex-col gap-1">
              <span>{data.videoDetails.author} - {data.videoDetails.title}</span>
              <span className="text-white/70 dark:text-foreground">Por favor, asegúrate de que el video tenga una transcripción disponible.</span>
            </div>
          </div>
        )
      });
    }

    const isValid = (url: string) => {
      const isYoutube = getVideoId(url).service === 'youtube' && getVideoId(url).id ? true : false
      return isYoutube
    }

    if (!isValid(url)) {
      toast({
        variant: 'default',
        title: 'URL inválida',
        description: 'Error: La URL no está soportada, unicamente enlaces de YouTube.'
      })
      return
    }

    setLoading(true)

    // Limpiar texto
    dispatch(clearText())

    // Open YT dialog
    dispatch(openYTDialog())
    setLastProcessedUrl(url)

    const res = await fetch(`/api/yt-transcript?url=${url}`, { method: 'GET' });

    await res.json().then((data) => {
      setLoading(false)
      // Set Data for errors
      setData(data)

      if (data.error) {
        toast({
          variant: 'destructive',
          title: 'El video no tiene transcripción disponible.',
          description: (
            <div className="flex gap-2 mt-1">
              <img src={data.videoDetails.thumbnails[1]} className="h-14 object-cover aspect-video rounded-md overflow-hidden"></img>
              <div className="flex flex-col gap-1">
                <span>{data.videoDetails.author} - {data.videoDetails.title}</span>
                <span className="text-white/70 dark:text-foreground">Por favor, asegúrate de que el video tenga una transcripción disponible.</span>
              </div>
            </div>
          )
        })
        // Close YT dialog
        dispatch(closeYTDialog())
        return
      }

      const { videoDetails, transcription } = data;
      const { title, author, description, thumbnails } = videoDetails;

      // Set text
      dispatch(setText({
        link: url,
        transcription,
        videoDetails: {
          title,
          author,
          description,
          thumbnails
        }
      }))
    })
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); handleClick({ url: ytUrl }) }}
      className={cn(
        'border  rounded-md transition relative p-6 group bg-white dark:bg-[#0a0a0a]',
        isValid ? 'border-foreground/70 dark:bg-purple/5 bg-purple/25' : 'hover:border-foreground/30'
      )}
    >
      <header className="flex items-center gap-2">
        <div className="rounded-full p-[5px] bg-muted/30 size-9 flex items-center justify-center">
          <Icon className="size-9" strokeWidth={1} />
        </div>
        <h4 className="text-xl font-medium">{title}</h4>
      </header>
      <p className={cn('mt-2 text-muted-foreground font-light', isValid && 'text-foreground')}>
        {description}
      </p>
      <div className="mt-4 flex gap-2">
        <Input
          placeholder="https://youtu.be"
          type="url"
          required
          autoFocus
          onChange={(e) => setYtUrl(e.target.value)}
          className={cn(
            'border-none',
            isValid ? 'ring-1 ring-foreground' :
              'ring-1 ring-foreground/20 group-hover:ring-foreground/30 transition w-full group-hover:focus:ring-foreground'
          )}
          value={ytUrl}
        />
        <Button disabled={loading} type="button" variant={'secondary'} onClick={handlePaste}>
          <ClipboardPaste className="size-4 mr-2" />
          Pegar
        </Button>
      </div>
      <Button disabled={loading} type="submit" className="mt-3 select-none" variant={'default'}>
        {loading ? (
          <>
            <Loader className="size-4 mr-1 animate-spin" />
            <span>Resumiendo</span>
          </>
        ) : 'Resumir'}
      </Button>

      {transcription.length > 0 &&
        <Button type="button" className="ml-2" variant={'secondary'} onClick={() => dispatch(openYTDialog())}>
          Abrir reciente
        </Button>
      }

    </form>
  )
}
