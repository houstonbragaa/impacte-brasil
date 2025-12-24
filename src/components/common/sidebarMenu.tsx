"use client"

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  handleOverlayClick: () => void
  sidebarVisible: boolean
  closeSidebar: () => void
}

const SidebarMenu = ({handleOverlayClick, sidebarVisible, closeSidebar}: SidebarProps) => {
  const pathname = usePathname()
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
            pathname === "/contacts" ? "text-secondary-blue" : "text-white"
          }`}
          onClick={closeSidebar}
        >
          Contatos
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
