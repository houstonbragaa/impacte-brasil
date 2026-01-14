"use client";

import { LayoutContent, LayoutDesktop } from "../layout/layout-content";

import Glow from "../common/glow";

const VideoTestemonial = () => {
  return (
    <LayoutContent className="relative">
      <Glow className="right-0" />
      <Glow className=" left-30 -bottom-70" />
      <LayoutDesktop className="flex flex-col gap-12 items-center md:mt-48 mt-24">
        <div className="relative md:w-3xl w-full md:h-100 h-[550px] rounded-4xl border-2 p-2">
          <video
            src="https://res.cloudinary.com/dpmmgqtzp/video/upload/v1768358232/202511141229_3_online-video-cutter.com_1_mak3nr.mp4"
            title="Impacte Brasil - Vídeo de apresentação"
            className="w-full h-full rounded-4xl object-cover md:object-contain"
            controls
            muted
            autoPlay
            playsInline
          />
        </div>
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default VideoTestemonial;
