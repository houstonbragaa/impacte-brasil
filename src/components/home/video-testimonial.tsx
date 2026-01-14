"use client";

import { useState } from "react";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import Image from "next/image";
import Glow from "../common/glow";

const VideoTestemonial = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  return (
    <LayoutContent className="relative">
      <Glow className="right-0"/>
      <Glow className=" left-30 -bottom-70"/>
      <LayoutDesktop className="flex flex-col gap-12 items-center md:mt-48 mt-24">
        <div className="relative md:w-3xl w-full md:h-100 h-[250px] rounded-4xl border-2 p-2">
          {showVideo ? (
            <video
              src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1768358232/202511141229_3_online-video-cutter.com_1_mak3nr.mp4"
              title="Impacte Brasil - Vídeo de apresentação"
              className="w-full h-full rounded-4xl mask-b-from-40%"
              controls
              autoPlay
            />
          ) : (
            <>
              <Image
                src="/capa-video-testimonial.png"
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
                  <circle cx="19" cy="19" r="19" fill="#374888" />
                  <polygon points="15,13 27,19 15,25" fill="#fff" />
                </svg>
              </button>
            </>
          )}
        </div>
        
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default VideoTestemonial;
