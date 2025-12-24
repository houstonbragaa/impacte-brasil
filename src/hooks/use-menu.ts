import { useEffect, useState } from "react";

const useMenuScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrolled;
};

const useMenu = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const overlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setSidebarVisible(false);
      setTimeout(() => setIsOpen(false), 300); // match duration
    }
  };

  const openSidebar = () => {
    setIsOpen(true);
    setTimeout(() => setSidebarVisible(true), 10); // animação suave
  };

  // Fechar sidebar
  const closeSidebar = () => {
    setSidebarVisible(false);
    setTimeout(() => setIsOpen(false), 300); // match duration
  };

  return {
    sidebarVisible,
    isOpen,
    overlayClick,
    openSidebar,
    closeSidebar,
  };
};

export { useMenuScroll, useMenu };
