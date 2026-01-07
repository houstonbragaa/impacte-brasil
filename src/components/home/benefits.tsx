
import {
  LayoutContent,
  LayoutDesktop,
} from "@/components/layout/layout-content";
import {
  ArrowDownWideNarrow,
  Blocks,
  ChartColumnIncreasing,
  HandFist,
} from "lucide-react";
import BenefitItem from "@/components/home/benefit-item";
import Image from "next/image";

const Benefits = () => {
  return (
    <LayoutDesktop className="mt-48 flex justify-center">
      <LayoutContent className="w-7xl">
        <div className="bg-zinc-100 w-full sm:h-[500px] h-full sm:rounded-[96px] rounded-4xl flex items-center flex-col sm:flex-row justify-around sm:p-12 p-6">
          <div className="flex flex-col gap-4 sm:justify-start justify-center">
            <h1 className="font-bold sm:text-4x mb-10 sm:mb-0 text-3xl text-center sm:text-left max-w-[300px]">
              Fique por dentro de nossos serviços
            </h1>
            <div className="relative w-[300px] h-[180px] bg-zinc-300 rounded-3xl">
              <div className="absolute flex justify-center items-center -right-6 top-15 w-[50px] h-[50px] bg-primary-green rounded-full border-4 border-zinc-100">
                <Image src="/logo-2.png" width={25} height={25} alt="logo-2"/>
              </div>
              <Image src="/image-benefits.jpg" width={300} height={200} alt="image benefits" className="rounded-3xl w-full h-full object-cover"/>
            </div>
          </div>
          <div className="sm:grid flex sm:mt-0 mt-10  flex-col sm:grid-cols-2 sm:grid-rows-2 justify-center">
            {/* Retangulo com linear gradiente destacado */}
            <div className="flex flex-col gap-1 p-8 w-[250px] sm:w-[200px] sm:mb-16 bg-linear-to-r from-primary-green to-secondary-blue rounded-4xl">
              <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
                <ArrowDownWideNarrow className="text-primary-green" />
              </div>
              <p className="max-w-[100px] text-white">
                Redução de retrabalho e falhas na gestão
              </p>
            </div>

            <BenefitItem
              icon={<Blocks className="text-primary-green" />}
              text="Integração entre áreas isoladas (financeiro, equipe, operação)"
              className="sm:mt-16 mt-0"
            />

            <BenefitItem
              icon={<ChartColumnIncreasing className="text-primary-green" />}
              text="Aumento de margem e faturamento"
            />

            <BenefitItem
              icon={<HandFist className="text-primary-green" />}
              text="Liderança mais presente e capacitada"
            />
          </div>
        </div>
      </LayoutContent>
    </LayoutDesktop>
  );
};

export default Benefits;
