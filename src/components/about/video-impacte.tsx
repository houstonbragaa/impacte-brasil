"use client";

const VideoImpacte = () => {
  return (
    <div className="relative shadow-2xl p-2 w-full max-w-[430px] md:w-[430px] h-[540px] md:h-full bg-transparent border border-white rounded-3xl shrink-0">
      <video
        src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1767813479/institucional_2_uksnkv.mp4"
        title="Impacte Brasil - Vídeo de apresentação"
        className="w-full h-full rounded-3xl object-cover"
        style={{ objectFit: "cover" }}
        controls
        autoPlay
        muted
      />
    </div>
  );
};

export default VideoImpacte;
