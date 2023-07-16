import { SignOutButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import { Suspense, type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ModeToggle";
import {
  GlobeIcon,
  HamburgerMenuIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import UserMenu from "./UserMenu";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { NavOptions } from "./NavOptions";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

interface Props {}

const NavBar: FC<Props> = async ({}) => {
  const user = await currentUser();
  if (!user) return null;

  return (
    <nav className="w-screen h-16 dark:border-b border-muted bg-background/30 backdrop-blur-md shadow-sm flex fixed top-0 right-0 left-0 transition-colors duration-200 z-50 ">
      <div className="flex items-center justify-between px-6 container mx-auto gap-2">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <div className="flex items-center  gap-1 cursor-pointer">
              <GlobeIcon className="h-7 w-7 text-accent-foreground  text-purple-500 pb-[1px]" />
              <span className="font-semibold text-secondary-foreground text-2xl  pb-[5px]  ">
                nexus
              </span>
            </div>
          </Link>
          <div className="hidden md:block">
            <NavOptions />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserMenu />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
