"use client";

import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookText, Globe, HomeIcon, MenuIcon, UsersRound } from "lucide-react";
import { useMenu, useMenuScroll } from "@/hooks/use-menu";
import SidebarMenu from "./sidebarMenu";

type HeaderProps = {
  isTransparent: "bg-transparent" | "bg-primary-green";
};

const Header = ({ isTransparent }: HeaderProps) => {
  const pathname = usePathname();
  const scrolled = useMenuScroll();
  const { openSidebar, isOpen, overlayClick, closeSidebar, sidebarVisible } =
    useMenu();

  return (
    <div
      className={`h-20 fixed top-0 right-0 left-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary-green" : isTransparent
      }`}
    >
      <LayoutContent>
        <div className="flex justify-between h-20 items-center text-white">
          <Image
            width={200}
            className="md:w-[300px] w-[200px] mb-2"
            height={40}
            alt="logo"
            src="/logo.svg"
          />
          <div className="md:flex hidden gap-9">
            <Link
              href="/"
              className={`flex items-center gap-2 ${
                pathname === "/"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }`}
            >
              <HomeIcon />
              Home
            </Link>
            <Link
              href="/about"
              className={`flex items-center gap-2 ${
                pathname === "/about"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }`}
            >
              <UsersRound />
              Sobre
            </Link>
            <Link
              href="/events"
              className={`flex items-center gap-2 ${
                pathname === "/events"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }`}
            >
              <Globe />
              Eventos
            </Link>
            <Link
              href="/contacts"
              className={`flex items-center gap-2 ${
                pathname === "/contacts"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }`}
            >
              <BookText />
              Contatos
            </Link>
          </div>

          <div className="md:hidden flex">
            <button
              type="button"
              onClick={openSidebar}
              className="text-white cursor-pointer hover:text-secondary-blue transition-colors duration-300"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Sidebar Mobile animado à direita */}
        {isOpen && (
          <SidebarMenu
            handleOverlayClick={overlayClick}
            closeSidebar={closeSidebar}
            sidebarVisible={sidebarVisible}
          />
        )}
      </LayoutContent>
    </div>
  );
};

export default Header;
