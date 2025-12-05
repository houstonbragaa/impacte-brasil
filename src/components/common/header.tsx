"use client";

import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  isTransparent: "bg-transparent" | "bg-primary-green";
};

const Header = ({ isTransparent }: HeaderProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-20 fixed top-0 right-0 left-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary-green" : isTransparent
      }`}
    >
      <LayoutContent>
        <div className="flex justify-between h-20 items-center text-white">
          <Image
            width={300}
            height={40}
            alt="logo"
            src="/logo.svg"
            className="mb-2"
          />
          <div className="flex gap-9">
            <Link
              href="/"
              className={pathname === "/" ? "text-secondary-blue font-bold" : "text-white"}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-secondary-blue font-bold" : "text-white"}
            >
              Sobre
            </Link>
            <Link
              href="/events"
              className={
                pathname === "/events" ? "text-secondary-blue font-bold" : "text-white"
              }
            >
              Eventos
            </Link>
            <Link
              href="/contacts"
              className={
                pathname === "/contacts" ? "text-secondary-blue font-bold" : "text-white"
              }
            >
              Contatos
            </Link>
          </div>
        </div>
      </LayoutContent>
    </div>
  );
};

export default Header;
