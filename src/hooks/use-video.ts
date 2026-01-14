import { useEffect, useState } from "react";

const useVideo = () => {
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      setAutoPlay(mediaQuery.matches);
    };

    handleChange(); // executa na montagem
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return autoPlay;
};

export { useVideo };
