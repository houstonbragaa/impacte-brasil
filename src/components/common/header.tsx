"use client";

import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { useMenuScroll } from "@/hooks/use-menu-scroll";

type HeaderProps = {
  isTransparent: "bg-transparent" | "bg-primary-green";
};

const Header = ({ isTransparent }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const scrolled = useMenuScroll();
  // Fechamento suave ao clicar fora
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setSidebarVisible(false);
      setTimeout(() => setIsOpen(false), 300); // match duration
    }
  };

  // Abrir sidebar
  const openSidebar = () => {
    setIsOpen(true);
    setTimeout(() => setSidebarVisible(true), 10); // animação suave
  };

  // Fechar sidebar
  const closeSidebar = () => {
    setSidebarVisible(false);
    setTimeout(() => setIsOpen(false), 300); // match duration
  };

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
              className={
                pathname === "/"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }
            >
              Sobre
            </Link>
            <Link
              href="/events"
              className={
                pathname === "/events"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }
            >
              Eventos
            </Link>
            <Link
              href="/contacts"
              className={
                pathname === "/contacts"
                  ? "text-secondary-blue font-bold"
                  : "text-white"
              }
            >
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
          <div
            className="fixed inset-0 z-40 bg-black/70 flex justify-end"
            onClick={handleOverlayClick}
          >
            <div
              className={`w-64 h-full bg-primary-green p-6 pt-10 flex flex-col gap-6 shadow-lg relative transform transition-transform duration-300 ease-in-out
                ${sidebarVisible ? "translate-x-0" : "translate-x-full"}`}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-secondary-blue transition-colors"
                onClick={closeSidebar}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
              <Link
                href="/"
                className={`text-lg font-semibold text-left ${
                  pathname === "/" ? "text-secondary-blue" : "text-white"
                }`}
                onClick={closeSidebar}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg font-semibold text-left ${
                  pathname === "/about" ? "text-secondary-blue" : "text-white"
                }`}
                onClick={closeSidebar}
              >
                Sobre
              </Link>
              <Link
                href="/events"
                className={`text-lg font-semibold text-left ${
                  pathname === "/events" ? "text-secondary-blue" : "text-white"
                }`}
                onClick={closeSidebar}
              >
                Eventos
              </Link>
              <Link
                href="/contacts"
                className={`text-lg font-semibold text-left ${
                  pathname === "/contacts"
                    ? "text-secondary-blue"
                    : "text-white"
                }`}
                onClick={closeSidebar}
              >
                Contatos
              </Link>
            </div>
          </div>
        )}
      </LayoutContent>
    </div>
  );
};

export default Header;
