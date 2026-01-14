import Image from "next/image";
import Button from "../common/button";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";

const AboutUs = () => {
  return (
    <>
      <div
        className={`
      w-24 h-12 mx-auto block -z-10 
      [background:#26676c] md:[background:#0f764f] 
      [clip-path:polygon(50%_100%,0_0,100%_0)]
      animate-bounce
    `}
      ></div>
      <LayoutContent>
        <LayoutDesktop className="flex flex-col space-y-24 md:mt-42 mt-24">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-24 md:h-[300px] h-full w-full">
            <p className="md:text-xl text:sm">
              Aqui, não entregamos serviços avulsos. Entregamos transformação.
              Com um portfólio robusto que conecta 14 empresas especializadas,
              atuamos de forma prática nas áreas mais sensíveis do supermercado:
              da consultoria tributária à operação, da gestão estratégica à
              inovação, da liderança à tecnologia aplicada.
            </p>
            <div className="relative shadow-2xl bg-zinc-300 w-full h-[250px] max-w-[500px] rounded-2xl">
              <Image 
                src="/photo-about.JPG"
                fill
                alt="photo-about"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="max-w-[800px] md:text-xl text-sm md:text-center text-left">
              Nosso papel é ser o elo entre o supermercadista e o próximo nível
              do seu negócio. Ajudamos líderes a enxergar o invisível, corrigir
              o que trava o crescimento e implementar soluções com segurança,
              clareza e acompanhamento real. Mais que parceiros, somos
              catalisadores de resultados duradouros. E é com esse compromisso
              que seguimos lado a lado com quem quer crescer com consciência,
              dominar seu mercado e transformar o varejo com inteligência.
            </p>
            <Button text="Faça parte da nossa comunidade" />
          </div>
        </LayoutDesktop>
      </LayoutContent>
    </>
  );
};

export default AboutUs;
