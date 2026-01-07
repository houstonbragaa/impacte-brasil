"use client";

import Image from "next/image";
import { useState } from "react";

const VideoImpacte = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <div className="relative shadow-2xl p-2 w-[430px] h-full bg-transparent border border-white rounded-3xl">
      {showVideo ? (
        <video
          src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1767813479/institucional_2_uksnkv.mp4"
          title="Impacte Brasil - Vídeo de apresentação"
          className="w-full h-full rounded-3xl object-cover mask-b-from-40%"
          style={{ objectFit: "cover" }}
          controls
          autoPlay
        />
      ) : (
        <>
          <Image
            src="/capa-video-impacte.png"
            alt="Capa retirada do vídeo"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-3xl object-cover mask-b-from-40%"
          />
          <button
            className="absolute cursor-pointer z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-lg hover:bg-white transition"
            onClick={() => setShowVideo(true)}
            aria-label="Reproduzir vídeo"
          >
            {/* Ícone Play simples */}
            <svg width={38} height={38} fill="currentColor" viewBox="0 0 38 38">
              <circle cx="19" cy="19" r="19" fill="#1C274C" />
              <polygon points="15,13 27,19 15,25" fill="#fff" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default VideoImpacte;
