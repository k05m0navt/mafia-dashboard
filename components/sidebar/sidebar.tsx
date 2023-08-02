import { LucideIcon } from "lucide-react";
import LinkButton from "./linkbutton";

type Props = {
  links: SidebarLink[];
};

export type SidebarLink = {
  href: string;
  text: string;
  icon: LucideIcon;
};

export default function Sidebar({ links }: Props) {
  return (
    <aside className="w-1/5 h-screen">
      <ul className="list-none flex flex-col justify-center h-screen">
        {links.map((link) => (
          <li key={link.text}>
            <LinkButton
              className="w-full justify-center md:justify-start p-7"
              link={link}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
