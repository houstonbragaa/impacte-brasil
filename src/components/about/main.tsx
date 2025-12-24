import { LayoutContent } from "../layout/layout-content";
import Image from "next/image";
import styles from '@/app/styles.module.css'

const Main = () => {
  return (
    <LayoutContent className="relative flex flex-col mt-36 mb-36 justify-center items-center gap-20">
      <Image
          alt="bg hero"
          fill={true}
          src="/gridhome.svg"
          className={`opacity-40 ${styles.bgImage}`}
          priority={true}
        />
      <h1 className="text-secondary-blue text-4xl font-semibold">
        Conheça nossa história
      </h1>
      <div className="flex lg:h-[600px] md:h-[500px] w-full gap-6 justify-center">
        <div className="w-[430px] h-full bg-zinc-300 rounded-3xl">
          {/* Video apresentando o impacte brasil */}
        </div>

        <div className="flex flex-col gap-10 w-[700px] h-full">
          <p className="text-white text-xl">
            A Impacte Brasil nasceu com um propósito firme: transformar o varejo
            supermercadista em um setor mais forte, estratégico e sustentável.
            Fundada por Jefferson Rossi e Vitor Santos, empresários com mais de
            20 anos de experiência no mercado corporativo, a Impacte se tornou o
            maior ecossistema de soluções integradas para o varejo no país.
          </p>
          <div className="grid grid-cols-2 grid-rows-1 gap-6 w-full h-full">
            <div className="bg-zinc-300 rounded-3xl">{/* Foto */}</div>

            <div className="bg-zinc-300 rounded-3xl">{/* Foto */}</div>
          </div>
          <div className="flex gap-6 w-full justify-start items-center">
            <div className="flex">
              <div className="w-16 h-16 rounded-full -mr-3 bg-zinc-300"></div>
              <div className="w-16 h-16 rounded-full -mr-3 bg-zinc-300"></div>
              <div className="w-16 h-16 rounded-full bg-zinc-300"></div>
            </div>
            <div className="flex flex-col max-h-16 text-white opacity-80">
              <h2 className="text-xl">+100</h2>
              <div className="flex flex-col">
                <span className="text-sm">Supermercadistas</span>
                <p className="text-xs">Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContent>
  );
};

export default Main;
