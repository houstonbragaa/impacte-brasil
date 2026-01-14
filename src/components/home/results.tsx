import {
  LayoutContent,
  LayoutDesktop,
} from "@/components/layout/layout-content";
import ResultItem from "@/components/home/result-item";
import Glow from "../common/glow";

const Results = () => {
  return (
    <div className="relative">
      <Glow className="-top-20 left-0"/>
      <Glow className="-top-100 -right-20"/>
      <LayoutDesktop className="relative flex flex-col items-center m-auto lg:mt-48 mt-24 max-w-7xl space-y-16">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold">
          Resultados
        </h1>
        <LayoutContent className="flex items-start gap-10 lg:gap-0 flex-col lg:flex-row lg:justify-around w-full">
          <ResultItem value="500M" description={"Em\nresultados"} />
          <div className="lg:h-12 lg:w-[2px] h-[2px] w-[60%] bg-primary-green"></div>
          <ResultItem value="100" description={"Mercados\natendidos"} />
          <div className="lg:h-12 lg:w-[2px] h-[2px] w-[60%] bg-primary-green"></div>
          <ResultItem value="14" description={"Empresas no\necossistema"} />
          <div className="lg:h-12 lg:w-[2px] h-[2px] w-[60%] bg-primary-green"></div>
          <ResultItem value="30" description={"Especialistas no\nsetor"} />
        </LayoutContent>
      </LayoutDesktop>
    </div>
  );
};

export default Results;
