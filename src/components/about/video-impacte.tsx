"use client"

import { useVideo } from "@/hooks/use-video";

const VideoImpacte = () => {
  const autoPlay = useVideo();

  return (
    <div className="relative shadow-2xl p-2 w-full max-w-[430px] md:w-[430px] h-[540px] md:h-full bg-transparent border border-white rounded-3xl shrink-0">
      <video
        src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1767813479/institucional_2_uksnkv.mp4"
        title="Impacte Brasil - Vídeo de apresentação"
        className="w-full h-full rounded-3xl object-cover"
        controls
        autoPlay={autoPlay}
        muted={autoPlay}
        playsInline
      />
    </div>
  );
};

export default VideoImpacte;
