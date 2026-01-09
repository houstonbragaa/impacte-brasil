import { LayoutContent } from "../layout/layout-content";
import Image from "next/image";
import styles from "@/app/styles.module.css";
import VideoImpacte from "./video-impacte";

const Main = () => {
  return (
    <LayoutContent className="relative flex flex-col mt-24 mb-24 justify-center items-center gap-10 sm:gap-16 md:gap-20">
      <Image
        alt="bg hero"
        fill={true}
        src="/gridhome.png"
        className={`opacity-40 ${styles.bgImage}`}
        priority={true}
      />
      <h1 className="text-secondary-blue text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Conheça nossa história
      </h1>
      <div className="flex flex-col md:flex-row md:h-[500px] lg:h-[600px] w-full gap-8 md:gap-6 justify-center items-center">
        <VideoImpacte />

        <div className="flex flex-col gap-6 sm:gap-10 w-full md:w-[420px] lg:w-[700px] h-full">
          <p className="text-white text-xl">
            A Impacte Brasil nasceu com um propósito firme: transformar o varejo
            supermercadista em um setor mais forte, estratégico e sustentável.
            Fundada por Jefferson Rossi e Vitor Santos, empresários com mais de
            20 anos de experiência no mercado corporativo, a Impacte se tornou o
            maior ecossistema de soluções integradas para o varejo no país.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-[300px] sm:h-full">
            <div className="shadow-2xl relative bg-transparent border border-zinc-300 rounded-3xl min-h-[260px] h-full">
              <Image
                src="/photo-1.png"
                fill
                alt="photo-1"
                loading="lazy"
                className="mask-b-from-50% p-2 rounded-3xl object-cover"
              />
            </div>

            <div className="shadow-2xl relative bg-transparent border border-zinc-300 rounded-3xl min-h-[260px] h-full">
              <Image
                src="/photo-2.png"
                fill
                alt="photo-1"
                loading="lazy"
                className="mask-b-from-50% p-2 rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6 w-full justify-start items-center mt-64 sm:mt-0">
            <div className="flex">
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full -mr-2 sm:-mr-3 bg-zinc-300"></div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full -mr-2 sm:-mr-3 bg-zinc-300"></div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-zinc-300"></div>
            </div>
            <div className="flex flex-col max-h-16 text-white opacity-80">
              <h2 className="text-lg sm:text-xl">+100</h2>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm">Supermercadistas</span>
                <p className="text-[10px] sm:text-xs">Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContent>
  );
};

export default Main;
