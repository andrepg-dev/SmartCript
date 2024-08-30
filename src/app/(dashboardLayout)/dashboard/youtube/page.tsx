'use client';

import ShineBorder from "@/components/magicui/shine-border";
import ProfileDropdown from "@/components/project/navigation/profile-dropdown";
import { ThemeButton } from "@/components/theme/theme-button";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";
import useUser from "@/hooks/user";
import { Captions, Sparkles, Text } from "lucide-react";

export interface Transcription {
  text: string;
  duration: number;
  offset: number;
  lang: Lang;
}

export enum Lang {
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
              Transcripción
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

      <div className="flex">
        <div className="mx-7 my-4 sticky top-4 left-4 w-[300px]">
          <h1 className="text-2xl font-bold w-[300px]">{videoDetails.title}</h1>
          <img src={videoDetails.thumbnails[2]} alt={videoDetails.title} className="rounded mt-2 w-[300px]" />
          <p className="mt-3">{videoDetails.author}</p>
        </div>

        <div className="px-7 py-2 flex flex-col gap-1 cursor-pointer ">
          {transcription.map((val: Transcription, index: number) => (
            <p className="group" key={index}>
              <span className="text-blue-700 dark:text-blue-500 group-hover:underline">{val.offset} - {val.duration}</span> - {val.text}
            </p>))
          }
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
