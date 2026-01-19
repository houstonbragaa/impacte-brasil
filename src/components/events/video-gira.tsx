"use client";

import { useState } from "react";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import Image from "next/image";
import Glow from "../common/glow";
import Link from "next/link";

const VideoGira = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  return (
    <LayoutContent className="relative">
      <Glow className="-bottom-50 -left-60" />
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
        <Link href="https://comunidadegira.com.br/" target="_blank" className="w-fit px-4 bg-secondary-blue h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-xs shadow-white hover:scale-105 hover:shadow-sm before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white">
          Conheça melhor nossa comunidade
        </Link>
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default VideoGira;
