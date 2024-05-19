import HeaderNavigation from "@/components/project/navigation/header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard: Smartcript",
  description: "SmartCript Dashboard layout",
}

export default function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <HeaderNavigation>
        <div className="rounded-full px-5 -ml-3 py-1 border bg-foreground/5 hover:bg-foreground/10 cursor-default text-xs text-center flex items-center">Beta</div>
      </HeaderNavigation> */}
      {children}
    </>
  )
}