import HeaderNavigation from "@/components/project/navigation/header";
import { Navigation } from "@/components/project/navigation/navigation";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavigation>
        <Navigation />
      </HeaderNavigation>
      {children}
    </>
  );
}
