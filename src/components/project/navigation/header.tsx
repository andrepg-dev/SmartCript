import { Navigation } from "@/components/project/navigation/navigation";
import ProfileDropdown from "@/components/project/navigation/profile-dropdown";
import { ThemeButton } from "@/components/theme/theme-button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <header className="py-3 px-8 flex justify-between items-center border-b backdrop-blur-xl">
      <div className="flex items-center gap-8">
        <Link href={'/'} className="text-lg font-bold">SmartCript</Link>
        <Navigation />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center relative">

          <Input placeholder="Servicios" className="dark:bg-[#131313] " />
          <kbd className="pointer-events-none absolute right-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
        <ThemeButton />

        <ProfileDropdown
          avatar_url="/avatars/20.png"
          avatarBgColor="bg-purple"
          fullName="Andre Sebastian Ponce Garcia"
          email="andreponce417@gmail.com" />
      </div>
    </header>
  )
}