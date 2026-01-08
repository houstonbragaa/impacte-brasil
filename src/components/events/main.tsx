import Image from "next/image";
import ArrowDown from "@/assets/arrowdownhome.svg";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";

const Main = () => {
  return (
    <LayoutContent className="h-screen relative flex justify-center items-center">
      <div className="absolute flex justify-center rounded-full items-center bg-white h-16 -bottom-8 right-1/2 translate-x-1/2">
        <Image
          width={36}
          height={36}
          alt="arrow down"
          src={ArrowDown}
          className="animate-bounce mt-2"
        />
      </div>
      <Image src="/gridhome.svg" alt="grid" fill className="opacity-25" />
      <LayoutDesktop className="flex flex-col justify-center items-center gap-16">
        <Image
          src="/gira-comunidade.png"
          alt="logo-gira-comunidade"
          width={130}
          height={130}
        />
        <h1 className="md:text-5xl text-3xl font-semibold text-white text-center max-w-2xl leading-normal">
          A COMUNIDADE QUE GIRA O VAREJO COM ESTRATÉGIA
        </h1>
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default Main;
