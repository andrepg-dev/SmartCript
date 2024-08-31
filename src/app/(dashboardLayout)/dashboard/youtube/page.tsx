'use client';

import ShineBorder from "@/components/magicui/shine-border";
import ProfileDropdown from "@/components/project/navigation/profile-dropdown";
import { TooltipElement } from "@/components/shadcn/tooltip";
import { ThemeButton } from "@/components/theme/theme-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/hooks/redux";
import useUser from "@/hooks/user";
import { Captions, Link, Sparkles, SquareArrowOutUpRight, Text, YoutubeIcon } from "lucide-react";

export interface Transcription {
  text: string;
  duration: number;
  offset: number;
  lang: Lang;
}

enum Lang {
  Es = "es",
}

export default function YoutubePage() {
  const { videoDetails, transcription } = useAppSelector(state => state.YTextractedText);
  const text = Array.isArray(transcription) && transcription.map((item: any) => item.text).join(' ');
  const { user } = useUser()

  return (
    <main className="w-full">
      <header className="border-b flex justify-between px-6 bg-white dark:bg-[#0a0a0a] w-full">
        <span className="w-full flex items-center py-4">Smartcript: ChatBot</span>
        <div className="flex gap-2 items-center">
          <ThemeButton />
          {user.user && user && (
            <ProfileDropdown
              avatarBgColor={user.user.avatar_color || 'bg-primary'}
              avatar_url={user.user.avatar}
              fullName={user.user.fullname}
              email={user.user.email}
            />
          )}
        </div>
      </header>

      <nav className="w-full justify-center flex mt-12 mb-7 px-7">
        <ShineBorder color={["#ef4444", "#2563eb"]} borderRadius={0} borderWidth={1} duration={300} className="border flex">
          <Button className="px-6 pl-9 rounded-none bg-primary/5 hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 text-primary relative">
              <Captions size={16} className="fill-white dark:fill-black h-4 p-0 m-0 absolute -left-6" />
              Timeline
            </span>
          </Button>

          <Button className="px-6 pl-9 rounded-none bg-transparent hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 text-primary relative">
              <Text size={16} className="fill-white dark:fill-black h-4 p-0 m-0 absolute -left-6" />
              Texto
            </span>
          </Button>

          <Button className="px-6 pl-9 rounded-none bg-transparent hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 from-red-500  to-blue-600 bg-gradient-to-r bg-clip-text text-transparent relative">
              <Sparkles size={16} className="fill-red-500  h-4 p-0 m-0 absolute -left-6" />
              Chatear con IA
            </span>
          </Button>
        </ShineBorder>
      </nav>

      <div className="flex flex-col px-7 py-4">
        <h5 className="text-2xl font-bold w-[40ch]">{videoDetails.title}</h5>
        <div className="flex gap-1 mt-1 text-purple">
          <YoutubeIcon className="w-5" />
          <span>{videoDetails.author}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="px-7 py-2 flex flex-col gap-4 cursor-pointer ">
          {transcription.map((val: Transcription, index: number) => (
            <div className="group flex gap-3 items-center" key={index}>
              <TooltipElement text={`Ir al segundo ${Math.round(val.offset)} del video`} duration={0}>
                <span className="bg-purple rounded p-1 text-white ring-primary !w-9 items-center flex text-center text-sm justify-center font-bold aspect-square group-hover:ring-1">{Math.round(val.offset)}s</span>
              </TooltipElement>
              <span className="group-hover:underline">{val.text}</span>
              {/* <Link className="h-auto w-4"/> */}
              <TooltipElement text={`Ir al segundo ${Math.round(val.offset)} del video`} duration={0}>
                <SquareArrowOutUpRight className="h-auto min-w-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              </TooltipElement>
            </div>
          ))}
        </div>

        <div className="mx-7 w-[500px]">
          <div className="sticky top-4 flex flex-col gap-2">
            <div className="relative">
              <img src={videoDetails.thumbnails[0]} alt={videoDetails.title} className="rounded mt-2 w-[300px] ring-purple absolute top-0 -z-10 left-0  blur-3xl opacity-50 dark:opacity-30" />
              <img src={videoDetails.thumbnails[3]} alt={videoDetails.title} className="rounded mt-2 w-[350px] ring-4 ring-purple z-20" />
            </div>
            <span className="mt-2">{videoDetails.description}</span>

            <Input placeholder="Busca palabras clave en el timeline" className="mt-2"/>
            <Button variant={'secondary'}>Buscar</Button>
          </div>
        </div>
      </div>

      <div className="px-7 py-4 flex flex-col gap-6 border-t bg-primary/5">
        <div>
          <h4 className="text-xl font-bold">Califica la transcripción</h4>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            En SmartCript valoramos tu opinión y queremos asegurarnos de que la transcripción sea <span className="text-[#af8a2d] dark:text-yellow-200/80">lo más precisa y útil posible para ti</span>. Por favor, tómate un momento para seleccionar una de las opciones que mejor refleje tu experiencia con la calidad de la transcripción proporcionada. Tu feedback es crucial para ayudarnos a mejorar y ofrecer un mejor servicio en el futuro. ✨
          </p>
        </div>

        <div className="flex gap-6">
          <Button className="bg-green-500 hover:bg-green-600 font-medium">Correcto</Button>
          <Button className="bg-red-500 hover:bg-red-600 font-medium">Incorrecto</Button>
        </div>
      </div>

    </main>
  );
}
