import { LayoutDesktop } from "../layout/layout-content";
import SolutionItem from "./solution-item";
import { solutions } from "@/constants/solutions";

const Solutions = () => {
  return (
    <LayoutDesktop className="mt-48 flex flex-col items-center space-y-20">
      <h1 className="text-4xl font-semibold">Soluções</h1>
      <h1 className="text-primary-green font-normal text-4xl max-w-[600px] text-center">
        Tudo que o supermercadista precisa em um só lugar
      </h1>
      <p className="text-xl text-center max-w-[900px]">
        Consultoria, capacitação, tecnologia e comunidade integradas em um único
        ecossistema, pensado para resolver desafios reais do supermercado com
        estratégia, clareza e aplicação prática.
      </p>
      <div className="w-full flex gap-12 flex-wrap justify-center items-center">
        {solutions.map(({ id, icon, title, description }, index) => ( 
          <SolutionItem
            key={id}
            icon={icon}
            title={title}
            description={description}
            className={index === 1 ? "mt-16": ""}
          />
        ))}
      </div>
    </LayoutDesktop>
  );
};

export default Solutions;
