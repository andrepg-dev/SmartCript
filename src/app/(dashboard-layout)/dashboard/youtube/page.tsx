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
  const { link, transcription } = useAppSelector(state => state.YTextractedText);
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

      <header className="border rounded w-max flex m-4">
        <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderRadius={0} borderWidth={1} duration={30}>
          <Button className="px-6 pl-9 rounded-none bg-primary/5 hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 text-primary relative">
              <Captions size={16} className="fill-white dark:fill-black h-4 p-0 m-0 absolute -left-6" />
              Transcription
            </span>
          </Button>

          <Button className="px-6 pl-9 rounded-none bg-transparent hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 text-primary relative">
              <Text size={16} className="fill-white dark:fill-black h-4 p-0 m-0 absolute -left-6" />
              Texto
            </span>
          </Button>

          <Button className="px-6 pl-9 rounded-none bg-transparent hover:bg-primary/5">
            <span className="text-sm items-center flex rounded-none gap-2 from-red-500 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent relative">
              <Sparkles size={16} className="fill-red-500  h-4 p-0 m-0 absolute -left-6" />
              Chatear con IA
            </span>
          </Button>
        </ShineBorder>
      </header>

      <div className="p-4 flex flex-col gap-1 cursor-pointer">
        {transcription.map((val: Transcription) => (
          <p className="group" key={val.duration}>
            <span className="text-blue-700 dark:text-blue-500 group-hover:underline">{val.offset} - {val.duration}</span> - {val.text}
          </p>))
        }
      </div>

      <div className=" px-4 py-4 flex flex-col gap-4 border-t bg-primary/5">
        <div>
          <h4 className="text-xl font-bold">Califica la transcripción</h4>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            En SmartCript valoramos tu opinión y queremos asegurarnos de que la transcripción sea <span className="text-[#af8a2d] dark:text-yellow-200/80">lo más precisa y útil posible para ti</span>. Por favor, tómate un momento para seleccionar una de las opciones que mejor refleje tu experiencia con la calidad de la transcripción proporcionada. Tu feedback es crucial para ayudarnos a mejorar y ofrecer un mejor servicio en el futuro. ✨
          </p>
        </div>

        <div className="flex gap-4">
          <Button className="bg-green-500 hover:bg-green-600">Correcto</Button>
          <Button className="bg-red-500 hover:bg-red-600">Incorrecto</Button>
        </div>
      </div>

    </main>
  );
}
