"use client";

import { useState } from "react";
import Button from "../common/button";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import Image from "next/image";

const VideoTestemonial = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  return (
    <LayoutContent>
      <LayoutDesktop className="flex flex-col gap-12 items-center md:mt-48 mt-24">
        <div className="relative md:w-3xl w-full md:h-100 h-[250px]  bg-transparent rounded-4xl border-2 border-amber-600 p-2">
          {showVideo ? (
            <video
              src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1767817382/aftermovie_final_horizontal_1_kjub52.mp4"
              title="Impacte Brasil - Vídeo de apresentação"
              className="w-full h-full rounded-4xl object-cover mask-b-from-40%"
              style={{ objectFit: "cover" }}
              controls
              autoPlay
            />
          ) : (
            <>
              <Image
                src="/capa-video-gira.png"
                alt="Capa retirada do vídeo"
                fill
                style={{ objectFit: "cover" }}
                className="w-full p-2 h-full rounded-4xl object-cover mask-b-from-40%"
              />
              <button
                className="absolute cursor-pointer z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-lg hover:bg-white transition"
                onClick={() => setShowVideo(true)}
                aria-label="Reproduzir vídeo"
              >
                {/* Ícone Play simples */}
                <svg
                  width={38}
                  height={38}
                  fill="currentColor"
                  viewBox="0 0 38 38"
                >
                  <circle cx="19" cy="19" r="19" fill="#ef4003" />
                  <polygon points="15,13 27,19 15,25" fill="#fff" />
                </svg>
              </button>
            </>
          )}
        </div>
        <p className="text-xl max-w-3xl text-center">
          Mais do que comunidade: um ecossistema vivo, com gente que fala a
          mesma língua, sonha grande e age junto.
        </p>
        <Button text="Conhecer melhor nossa comunidade" />
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default VideoTestemonial;
