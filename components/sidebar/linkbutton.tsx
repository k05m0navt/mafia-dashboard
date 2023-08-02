import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarLink } from "./sidebar";

type Props = {
  className?: string;
  link: SidebarLink;
};

const LinkButton = ({ className, link }: Props) => {
  return (
    <Button
      key={link.href}
      variant="ghost"
      className={cn("group hover:bg-tertiary/10 rounded-2xl", className)}
      asChild
    >
      <Link href={link.href} className="flex space-x-4">
        {
          <link.icon className="stroke-secondary group-hover:stroke-primary" />
        }
        <p className="text-secondary group-hover:text-primary text-xl hidden md:block">
          {link.text}
        </p>
      </Link>
    </Button>
  );
};

export default LinkButton;
