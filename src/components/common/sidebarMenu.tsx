"use client";

import { BookText, Globe, HomeIcon, UsersRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  sidebarVisible: boolean;
  closeSidebar: () => void;
}

const SidebarMenu = ({
  handleOverlayClick,
  sidebarVisible,
  closeSidebar,
}: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div
      className="fixed inset-0 z-40 bg-black/70 flex justify-end"
      onClick={handleOverlayClick}
    >
      <div
        className={`w-64 h-full bg-primary-green p-6 pt-10 flex flex-col gap-6 shadow-lg relative transform transition-transform duration-300 ease-in-out
                ${sidebarVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute cursor-pointer top-6 right-6 text-white hover:text-secondary-blue transition-colors"
          onClick={closeSidebar}
          aria-label="Fechar menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full h-px mt-8 bg-white/20"></div>
        <Link
          href="/"
          className={`flex items-center gap-2 text-lg font-semibold text-left ${
            pathname === "/" ? "text-secondary-blue" : "text-white"
          }`}
          onClick={closeSidebar}
        >
          <HomeIcon />
          Home
        </Link>
        <div className="w-full h-px bg-white/20"></div>
        <Link
          href="/about"
          className={`flex items-center gap-2 text-lg font-semibold text-left ${
            pathname === "/about" ? "text-secondary-blue" : "text-white"
          }`}
          onClick={closeSidebar}
        >
          <UsersRound />
          Sobre
        </Link>
        <div className="w-full h-px bg-white/20"></div>
        <Link
          href="/events"
          className={`flex items-center gap-2 text-lg font-semibold text-left ${
            pathname === "/events" ? "text-secondary-blue" : "text-white"
          }`}
          onClick={closeSidebar}
        >
          <Globe />
          Eventos
        </Link>
        <div className="w-full h-px bg-white/20"></div>
        <Link
          href="/contacts"
          className={`flex items-center gap-2 text-lg font-semibold text-left ${
            pathname === "/contacts" ? "text-secondary-blue" : "text-white"
          }`}
          onClick={closeSidebar}
        >
          <BookText />
          Contatos
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
