import { LucideIcon } from "lucide-react";
import LinkButton from "./linkbutton";

type Props = {
  links: SidebarLink[][];
};

export type SidebarLink = {
  href: string;
  text: string;
  icon: LucideIcon;
};

export default function Sidebar({ links }: Props) {
  const logoSrc: string = process.env.LOGO_URL as string;

  return (
    <aside className="flex flex-col w-1/5 md:space-y-10 space-y-5 md:my-10 ml-3 mt-3 mb-3">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          {links[0].map((link) => (
            <LinkButton
              key={link.text}
              className="w-full justify-center md:justify-start p-7"
              link={link}
            />
          ))}
        </div>
        <div className="flex flex-col">
          {links[1].map((link) => (
            <LinkButton
              key={link.text}
              className="w-full justify-center md:justify-start p-7"
              link={link}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
