import Sidebar, { SidebarLink } from "@/components/sidebar/sidebar";
import { Analytics } from "@vercel/analytics/react";
import { Home, PlusSquare, Table, Users } from "lucide-react";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta400 = Mukta({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: process.env.PROJECT_NAME,
};

const links: SidebarLink[][] = [
  [
    {
      href: "/",
      text: "Home",
      icon: Home,
    },
    {
      href: "/table",
      text: "Table",
      icon: Table,
    },
    {
      href: "/players",
      text: "Players",
      icon: Users,
    },
  ],
  [
    {
      href: "/game",
      text: "Game",
      icon: PlusSquare,
    },
  ],
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={mukta400.style} className="bg-primary flex">
        <Analytics />
        <Sidebar links={links} />
        <main className="h-[calc(100vh-0.75rem*2)] bg-secondary m-3 w-4/5 rounded-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}
