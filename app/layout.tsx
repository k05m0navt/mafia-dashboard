import Sidebar, { SidebarLink } from "@/components/sidebar/sidebar";
import { Analytics } from "@vercel/analytics/react";
import { Home, Table, Users } from "lucide-react";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta400 = Mukta({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: process.env.PROJECT_NAME,
};

const links: SidebarLink[] = [
  {
    href: "/",
    text: "Home",
    icon: Home,
  },
  {
    href: "/",
    text: "Table",
    icon: Table,
  },
  {
    href: "/",
    text: "Players",
    icon: Users,
  },
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
        {children}
      </body>
    </html>
  );
}
