"use client";

import { useEffect, useState } from "react";

const VideoImpacte = () => {
  const [autoPlay, setAutoPlay] = useState(false);

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

  return (
    <div className="relative shadow-2xl p-2 w-full max-w-[430px] md:w-[430px] h-[540px] md:h-full bg-transparent border border-white rounded-3xl shrink-0">
      <video
        src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1767813479/institucional_2_uksnkv.mp4"
        title="Impacte Brasil - Vídeo de apresentação"
        className="w-full h-full rounded-3xl object-cover"
        controls
        autoPlay={autoPlay}
        muted
        playsInline
      />
    </div>
  );
};

export default VideoImpacte;
