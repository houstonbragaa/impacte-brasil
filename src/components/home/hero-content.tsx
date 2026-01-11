import Image from "next/image";
import Button from "@/components/common/button";
import { LayoutContent } from "@/components/layout/layout-content";
import ArrowDown from "@/assets/arrowdownhome.svg";

const HeroContent = () => {
  return (
    <>
      <LayoutContent className="flex mb-32 mt-36 md:mt-52 flex-col text-center justify-center items-center text-white">
        <h1 className="text-3xl opacity-90 md:text-6xl font-bold max-w-4xl leading-normal">
          O MAIOR ECOSSISTEMA DE VAREJO{" "}
          <span className="text-secondary-blue">SUPERMERCADISTA</span> DO BRASIL
        </h1>
        <h3 className="text-md font-bold mb-12 opacity-80">
          Onde os desafios viram histórias reais de crescimento
        </h3>
        <Button text="Faça parte do nosso ecossistema" />
      </LayoutContent>
      <div className="flex flex-col relative w-full">
        <div className="absolute flex justify-center rounded-full items-center bg-white h-16 top-4 right-1/2 translate-x-1/2">
          <Image
            width={36}
            height={36}
            alt="arrow down"
            src={ArrowDown}
            className="animate-bounce mt-2"
          />
        </div>
        <svg
          width="100%"
          viewBox="0 0 1440 140"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-12"
        >
          <path
            d="M0 64L120 48C240 32 480 0 720 0C960 0 1200 32 1320 48L1440 64V192H1320C1200 192 960 192 720 192C480 192 240 192 120 192H0V64Z"
            fill="white"
          />
        </svg>
        <LayoutContent className="bg-white flex justify-center items-center pb-28 text-center">
          <p className="max-w-3xl md:text-xl text-sm font-semibold md:pt-0 pt-12">
            Na Impacte, os desafios do dia a dia se transformam em oportunidades
            práticas de evolução  com apoio estratégico, comunidade ativa e
            soluções integradas que entregam resultado real.
          </p>
        </LayoutContent>
      </div>
    </>
  );
};

export default HeroContent;
