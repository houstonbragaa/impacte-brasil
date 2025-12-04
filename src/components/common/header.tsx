"use client";

import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";
import { useState, useEffect } from "react";

type HeaderProps = {
  isTransparent: "bg-transparent" | "bg-primary-green";
};

const Header = ({ isTransparent }: HeaderProps) => {
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
            <Link href="/">Home</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/events">Eventos</Link>
            <Link href="/contacts">Contatos</Link>
          </div>
        </div>
      </LayoutContent>
    </div>
  );
};

export default Header;
